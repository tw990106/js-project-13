// import {sendDetail} from './main.js';
document.addEventListener('DOMContentLoaded', function() {  
 // slide
 let mySwiper = new Swiper('.swiper-container', {
     slidesPerView: 'auto',
     slidesPerGroup: 4,
     // observer: true,
     // observeParents: true,
     spaceBetween: 20,
     loop: false,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     breakpoints: {
         1280: {
             slidesPerView: 'auto',
             slidesPerGroup: 1,
         },
         720: {
             slidesPerView: 'auto',
             slidesPerGroup: 1,
         }
     }
 });
 // list text




// import { sendDetail } from './main.js';
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg';
let movieList = [];
let movieDetail = [];
const options = {
    method: 'GET', 
    headers: {accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
    }
};
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, options)
    .then(response => response.json())
    .then(response => {
        movieDetail = response;
        console.log(movieDetail);
        render(movieDetail);
    })
    .catch(err => console.error(err));
}
getMovies();


const getSimilarMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=ko&page=1`, options)
    .then(response => response.json())
    .then(response => {
        // movieList = response.results;
        // similarRender(movieList);
        if (Array.isArray(response.results)) {
            movieList = response.results;
            console.log(movieList);
            similarRender(movieList);
        } else {
            console.error("Response results is not an array:", response.results);
        }
    })
    .catch(err => console.error(err));
}
getSimilarMovie();


const render = () => {
    // const director = movieDetail.credits ? movieDetail.credits.crew.find(person => person.job === 'Director') : null;
    // const cast = movieDetail.credits ? movieDetail.credits.cast.map(actor => actor.name).join(', ') : '정보 없음';
    const overviewHTML = movieDetail.overview ? `<p class="summary mb-2">${movieDetail.overview}</p>` : '<p class="summary mb-2">줄거리가 없습니다.</p>';

    const detailHTML = `
    <div class="detail-img"><img src="${IMG_URL}${movieDetail.poster_path}" alt="포스터"></div>
    <div class="detail-txt">
        <h3>${movieDetail.title}</h3>
        <div class="movie-info flex mb-4">
            <span class="info-box">${movieDetail.release_date.slice(0, 4)}</span>
            <span class="info-box">${movieDetail.genres.map(genre => genre.name).join(', ')}</span>
            <span class="info-box">${movieDetail.runtime}분</span>
        </div>
        <div class="subs mb-4 flex">
            <button>이용권 구독하기</button>
            <span class="fav-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="mb-2 fav-icon" width="32" height="32" viewBox="0 0 32 32"><path d="M0 0h32v32H0z" fill="transparent"></path><g data-name="패\uC2A4 4347" fill="none"><path d="M16 31.5l-2.175-1.979C6.1 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.822 17.293z"></path><path d="M16.004 29.34l1.15-1.037c3.73-3.386 6.951-6.31 9.107-8.95 2.17-2.658 3.138-4.851 3.138-7.11v-.016a6.604 6.604 0 00-1.924-4.707 6.522 6.522 0 00-4.713-1.92 7.382 7.382 0 00-5.548 2.575L16 9.589l-1.214-1.414A7.384 7.384 0 009.233 5.6a6.522 6.522 0 00-4.708 1.92A6.604 6.604 0 002.6 12.227v.015c0 2.264.972 4.461 3.151 7.124 2.164 2.644 5.397 5.572 9.141 8.963l.01.008 1.102 1.004M16 31.499l-2.175-1.978C6.099 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.823 17.294L16 31.499z" fill="#fff"></path></g></svg>
                <span>찜</span>
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="mb-2" width="32" height="32" viewBox="0 0 32 32"><path fill="rgba(20,20,20,0)" d="M0 0h32v32H0z"></path><path fill="#fff" d="M30 31.3H2a.8.8 0 01-.8-.8v-13a.8.8 0 01.8-.8.8.8 0 01.8.8v12.2h26.4V17.5a.8.8 0 01.8-.8.8.8 0 01.8.8v13a.8.8 0 01-.8.8zm-13.963-10a.8.8 0 01-.8-.8V3.414l-6.43 6.43a.8.8 0 01-1.131 0 .8.8 0 01-.234-.566.8.8 0 01.234-.566L15.454.934A.8.8 0 0116.019.7h.023a.8.8 0 01.3.06.8.8 0 01.247.161l.01.01 7.773 7.778a.8.8 0 01.234.565.8.8 0 01-.234.566.8.8 0 01-1.131 0l-6.409-6.412V20.5a.8.8 0 01-.794.8z" opacity="0.995"></path></svg>
                <span>공유</span>
            </span>
        </div>
        ${overviewHTML}
        <div class="more-btn main-btn">더보기</div>
        <div class="close main-btn">닫기</div>
    </div>
    `;
    document.getElementById('detail-main').innerHTML = detailHTML;
}

const similarRender = (movie) => {
    const overviewHTML = movie.overview ? `<p class="summary mb-2">${movie.overview}</p>` : '<p class="summary mb-2">줄거리가 없습니다.</p>';
    
    const similarHTML = movieList.map(movie => `
    <li class="swiper-slide">
        <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}">
        <div class="list-txt">
            <h5>${movie.title}</h5>
            <span>${movie.genres.map(genre => genre.name).join(', ')}</span>
            ${overviewHTML}
        </div>
    </li>
    `).join('');
    document.getElementById('similar-list').innerHTML = similarHTML;
}





let elements = document.getElementsByClassName('ellipsis');
for (let i=0; i<elements.length; i++){
    let element = elements[i];
    let text = element.innerText;
    let maxLength = 100;
    if(text.length > maxLength){
        let trimmedText = text.substr(0, maxLength) + '...';
        element.innerText = trimmedText;
    }
}


let summary = document.querySelector('.summary');
let moreBtn = document.querySelector('.more-btn');
let closeBtn = document.querySelector('.close');
moreBtn.addEventListener('click', function(){
    summary.style.maxHeight = 'none';
    moreBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});
closeBtn.addEventListener('click', function(){
    summary.style.maxHeight = '80px';
    moreBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});
// fav btn
const favBtn = document.querySelector('.fav-btn');
const favIcon = favBtn.querySelector('.fav-icon');
const popup = document.createElement('div');
popup.classList.add('popup');
favBtn.appendChild(popup);
favBtn.addEventListener('click', function(){
    if(favIcon.classList.contains('clicked')){
        favIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="mb-2 fav-icon" width="32" height="32" viewBox="0 0 32 32"><path d="M0 0h32v32H0z" fill="transparent"></path><g data-name="패\uC2A4 4347" fill="none"><path d="M16 31.5l-2.175-1.979C6.1 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.822 17.293z"></path><path d="M16.004 29.34l1.15-1.037c3.73-3.386 6.951-6.31 9.107-8.95 2.17-2.658 3.138-4.851 3.138-7.11v-.016a6.604 6.604 0 00-1.924-4.707 6.522 6.522 0 00-4.713-1.92 7.382 7.382 0 00-5.548 2.575L16 9.589l-1.214-1.414A7.384 7.384 0 009.233 5.6a6.522 6.522 0 00-4.708 1.92A6.604 6.604 0 002.6 12.227v.015c0 2.264.972 4.461 3.151 7.124 2.164 2.644 5.397 5.572 9.141 8.963l.01.008 1.102 1.004M16 31.499l-2.175-1.978C6.099 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.823 17.294L16 31.499z" fill="#fff"></path></g></svg>
        `;
        favIcon.classList.remove('clicked');
        
        // 팝업 메시지 표시
        popup.textContent = '찜 해제되었습니다.';
        popup.style.display = 'block';
    }else{
        favIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M0 0h32v32H0z" fill="transparent"></path><path d="M16 31.498l-2.175-1.979C6.1 22.521 1 17.905 1 12.24a8.165 8.165 0 018.25-8.242A8.984 8.984 0 0116 7.131a8.984 8.984 0 016.75-3.133A8.165 8.165 0 0131 12.24c0 5.665-5.1 10.281-12.822 17.293z" fill="#fff"></path></svg>            
        `;
        favIcon.classList.add('clicked');
        // 팝업 메시지 표시
        popup.textContent = '찜 등록되었습니다.';
        popup.style.display = 'block';
    }
    // 5초 후 팝업 메시지 사라짐
    setTimeout(function(){
        popup.style.display = 'none';
    }, 3000);
});



















// 상세 정보를 가져오는 함수

/*
const fetchMovieDetail = () => {
    fetch('https://api.themoviedb.org/3/movie/${movieId}?language=ko', options)
    .then(response => response.json())
    .then(response => {
            const movieDetail = response.results;
            render(movieDetail);
    } 
            )
    .catch(err => console.error(err));
}
*/
/*
const fetchMovieDetail = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie detail', error);
    }
}
*/
    /*
    fetch('https://api.themoviedb.org/3/movie/${movieId}?language=ko', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    */
    /*
    try {
        const response = await fetch(url);
        const data = await response.json();
        movieList = data.results;
        return data;
    } catch (error) {
        console.error('Error fetching movie detail', error);
    }
    */


// 페이지 로드 후 실행되는 함수
/*
const renderMovieDetail = async () => {
    try {
        const movieDetail = await fetchMovieDetail();
        render(movieDetail);


    } catch (error) {
        console.error('Error rendering movie detail', error);
    }
}
renderMovieDetail();
*/

/*
const render = (movieDetail) => {
    const director = movieDetail.credits ? movieDetail.credits.crew.find(person => person.job === 'Director') : null;
    const cast = movieDetail.credits ? movieDetail.credits.cast.map(actor => actor.name).join(', ') : '정보 없음';
    const overviewHTML = movieDetail.overview ? `<p class="summary mb-2">${movieDetail.overview}</p>` : '<p class="summary mb-2">줄거리가 없습니다.</p>';

    const detailHTML = `
    <div class="detail-img"><img src="${IMG_URL}${movieDetail.poster_path}" alt="포스터"></div>
    <div class="detail-txt">
        <h3>${movieDetail.title}</h3>
        <div class="movie-info flex mb-4">
            <span class="info-box">${movieDetail.release_date.slice(0, 4)}</span>
            <span class="info-box">${movieDetail.genres.map(genre => genre.name).join(', ')}</span>
            <span class="info-box">${movieDetail.runtime}분</span>
        </div>
        <div class="subs mb-4 flex">
            <button>이용권 구독하기</button>
            <span class="fav-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="mb-2 fav-icon" width="32" height="32" viewBox="0 0 32 32"><path d="M0 0h32v32H0z" fill="transparent"></path><g data-name="패\uC2A4 4347" fill="none"><path d="M16 31.5l-2.175-1.979C6.1 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.822 17.293z"></path><path d="M16.004 29.34l1.15-1.037c3.73-3.386 6.951-6.31 9.107-8.95 2.17-2.658 3.138-4.851 3.138-7.11v-.016a6.604 6.604 0 00-1.924-4.707 6.522 6.522 0 00-4.713-1.92 7.382 7.382 0 00-5.548 2.575L16 9.589l-1.214-1.414A7.384 7.384 0 009.233 5.6a6.522 6.522 0 00-4.708 1.92A6.604 6.604 0 002.6 12.227v.015c0 2.264.972 4.461 3.151 7.124 2.164 2.644 5.397 5.572 9.141 8.963l.01.008 1.102 1.004M16 31.499l-2.175-1.978C6.099 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.823 17.294L16 31.499z" fill="#fff"></path></g></svg>
                <span>찜</span>
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="mb-2" width="32" height="32" viewBox="0 0 32 32"><path fill="rgba(20,20,20,0)" d="M0 0h32v32H0z"></path><path fill="#fff" d="M30 31.3H2a.8.8 0 01-.8-.8v-13a.8.8 0 01.8-.8.8.8 0 01.8.8v12.2h26.4V17.5a.8.8 0 01.8-.8.8.8 0 01.8.8v13a.8.8 0 01-.8.8zm-13.963-10a.8.8 0 01-.8-.8V3.414l-6.43 6.43a.8.8 0 01-1.131 0 .8.8 0 01-.234-.566.8.8 0 01.234-.566L15.454.934A.8.8 0 0116.019.7h.023a.8.8 0 01.3.06.8.8 0 01.247.161l.01.01 7.773 7.778a.8.8 0 01.234.565.8.8 0 01-.234.566.8.8 0 01-1.131 0l-6.409-6.412V20.5a.8.8 0 01-.794.8z" opacity="0.995"></path></svg>
                <span>공유</span>
            </span>
        </div>
        <div class="mv-info">감독<span>${director ? director.name : '정보 없음'}</span></div>
        <div class="mv-info mb-4">출연<span>${cast}</span></div>
        ${overviewHTML}
        <div class="more-btn main-btn">더보기</div>
        <div class="close main-btn">닫기</div>
    </div>
    `;
    document.getElementById('detail-main').innerHTML = detailHTML;
}

*/

/*
const getSimilarMovies = () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=ko`, options);
        const data = await response.json();
        return data.results;
        
      } catch (error) {
        console.error('Error fetching similar movies', error);
        throw error;
      }

}
*/

/*
const getSimilarMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/${movieId}/similar?language=ko', options)
    .then(response => response.json())
    .then(response => {
        const movieList = response.result;
        similarRender(movieList);
    })
    .catch(err => console.error(err));
}

const similarRender = (movieList) => {
    try {
        // movieList = await getSimilarMovies();
        const similarHTML = movieList.map(movie => `
            <li class="swiper-slide">
                <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}">
                <div class="list-txt">
                    <h5>${movie.title}</h5>
                    <span>${movie.genres.map(genre => genre.name).join(', ')}</span>
                    ${movie.overview ? `<p class="summary mb-2">${movie.overview}</p>` : '<p class="summary mb-2">줄거리가 없습니다.</p>'}
                </div>
            </li>
        `);
        document.getElementById('similar-list').innerHTML = similarHTML.join('');
    } catch (error) {
        console.error('Error rendering similar movies', error);
    }
}
// similarRender();
fetchMovieDetail();
getSimilarMovies();
*/


});