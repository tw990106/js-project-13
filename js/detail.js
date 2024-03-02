// import {sendDetail} from './main.js';
    
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



// import { sendDetail } from './main.js';

const API_KEY = '6f97625a1c75f3ce06489a0e5b0ebda1';
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
let url = `https://api.themoviedb.org/3/movie/${movieId}?language=ko&api_key=${API_KEY}`;
let movieList = [];
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// 상세 정보를 가져오는 함수
const fetchMovieDetail = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        movieList = data.results;
        return data;
    } catch (error) {
        console.error('Error fetching movie detail', error);
    }
}

// 페이지 로드 후 실행되는 함수
const renderMovieDetail = async () => {
    try {
        const movieDetail = await fetchMovieDetail();
        render(movieDetail);
    } catch (error) {
        console.error('Error rendering movie detail', error);
    }
}
renderMovieDetail();

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


const similarRender = () => {
    url = new URL(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=ko&api_key=${API_KEY}`);


    const similarHTML = movieList.map(movieDetail => `
    <li class="swiper-slide">
    <img src="https://image.tving.com/upload/cms/caim/CAIM2100/M000248133.jpg/dims/resize/400" alt="사자">
    <div class="list-txt">
        <h5>${movieDetail.title}</h5>
        <span>${movieDetail.genres.map(genre => genre.name).join(', ')}</span>
        ${overviewHTML}
    </div>
</li>
    `);
    document.getElementById('similar-list').innerHTML = similarHTML;

}

similarRender();


/*
import {sendDetail} from './main.js';

const API_KEY = `6f97625a1c75f3ce06489a0e5b0ebda1`;
let movieList = [];
// let movieId = 550;

let url = new URL(`https://api.themoviedb.org/3/movie/${movieId}?language=ko&api_key=${API_KEY}`);
let IMG_URL = `https://image.tmdb.org/t/p/w500`;

// 상세 정보를 가져오는 함수
const fetchMovieDetail = async () => {
    const response = await fetch(url);
    const data = await response.json();
    movieList = data.results;
    // const data = await response.json();
    // return data;
    console.log(movieList);
}

// 페이지 로드 후 실행되는 함수
const renderMovieDetail = async (movieId) => {
    
    try{
        const movieDetail = await fetchMovieDetail(movieId);
        console.log(movieDetail);

        render();

    }catch(error){
        console.error('Error fetching movie detail', error);
    }
}
renderMovieDetail(movieId);

const render = () => {
    const detailHTML = movieList.map((movieDetail) => `
    <div class="detail-img"><img src="${IMG_URL}${movieDetail.poster_path}" alt="포스터"></div>
    <div class="detail-txt">
        <div class="movie-info flex mb-4">
            <h3>${movieDetail.title}</h3>
            <span class="info-box">${movieDetail.release_date.slice(0, 4)}</span>
            <span class="info-box">${movieDetail.genres.name}</span>
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
        <div class="mv-info">크리에이터<span>장재현</span></div>
        <div class="mv-info mb-4">출연<span>김윤석, 강동원, 박소담, 김의성, 손종학, 이호재, 남일우, 김병옥</span></div>
        <p class="summary mb-2">2015년 서울 뺑소니 교통사고 이후 의문의 증상에 시달리는 한 소녀. 잦은 돌출 행동으로 교단의 눈 밖에 난 ‘김신부’는 모두의 반대와 의심 속, 소녀를 구하기 위한 자신만의 계획을 준비한다. 이를 위해선 모든 자격에 부합하는 또 한 명의 사제가 필요한 상황, 모두가 기피하는 가운데 신학생인 ‘최부제’가 선택되고, 그는 ‘김신부’를 돕는 동시에 감시하라는 미션을 받게 된다. 그리고 마침내 소녀를 구할 수 있는 단 하루의 기회, 김신부와 최부제는 모두의 목숨을 잃을 수도 있는 위험한 예식을 시작하는데… “절대 쳐다보지마. 이제부터 넌 여기 없는 거야”</p>
        <div class="more-btn main-btn">더보기</div>
        <div class="close main-btn">닫기</div>
    </div>
    `)
    document.getElementById('detail-main').innerHTML = detailHTML;
}
*/






















/*
const fetchMovieDetail = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key={API_KEY}`);
    const data = await response.json();
    return data;
}
*/










/*
// 영화 상세 정보를 화면에 출력하는 함수
async function renderMovieDetail(movieId) {
    const movieDetail = await fetchData(movieId);

    // 이미지
    const detailImg = document.querySelector('.detail-img img');
    detailImg.src = `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`;

    // 영화 정보
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes[0].textContent = movieDetail.release_date.split('-')[0]; // 개봉년도
    infoBoxes[1].textContent = movieDetail.genres.map(genre => genre.name).join(', '); // 장르
    infoBoxes[2].textContent = `{movieDetail.runtime}분`; // 시간

    // 크리에이터, 출연자 정보
    const directorSpan = document.querySelector('.mv-info span:first-child');
    directorSpan.textContent = movieDetail.director;
    const castSpan = document.querySelector('.mv-info span:last-child');
    castSpan.textContent = movieDetail.cast.join(', ');

    // 줄거리
    const summary = document.querySelector('.summary');
    summary.textContent = movieDetail.overview; // 영화 줄거리
}
renderMovieDetail();
*/