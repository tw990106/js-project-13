document.addEventListener("DOMContentLoaded", function () {

    let autoSwiper = new Swiper('.auto-swiper-container', {
        // 옵션 설정
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000, // 5초마다 자동으로 넘어감
        },
        navigation: {
            nextEl: '.auto-swiper-button-next',
            prevEl: '.auto-swiper-button-prev',
        },
        // 추가 옵션 설정...
    });

    // 하나씩 넘어가는 multiple 슬라이드
    let manualSwiper = new Swiper('.manual-swiper-container', {
        // 옵션 설정
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        // observer: true,
        // observeParents: true,
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.manual-swiper-button-next',
            prevEl: '.manual-swiper-button-prev',
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

});

let movieList = [];
let url = new URL(`https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1`);
const IMG_URL = `http://image.tmdb.org/t/p/w500`;

const getMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    movieList = data.results;
    render();
}

const getMoviesTrending = async () => {
    url = new URL(`https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1`);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    movieList = data.results;
    render();
}

const getMoviesPopular = async () => {
    url = new URL(`https://api.themoviedb.org/3/movie/popular?language=ko&page=1`);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("d", data);
    movieList = data.results;
    console.log(movieList);
    renderPopular();
}

const render = () => {
    console.log("render", movieList);
    const movieHTML = movieList.map(movie => `<div class="swiper-slide">
    <img class="swiper-background-img" src="${IMG_URL}${movie.poster_path}"/>
    <div class="swiper-text">
      <h4>${movie.title}</h4>
      <p>${movie.overview}</p>
    </div>
  </div>`).join('');
    document.getElementById('trending-movies').innerHTML += movieHTML;
}

const renderPopular = () => {
    console.log("renderPopular", movieList);
    const moviePopularHTML = movieList.map(movie => `<div class="swiper-slide item">
  <img
  src="${IMG_URL}${movie.poster_path}" />
  <div
    class="label-wrapper newepisode-label-wrapper absolute sm:w-[2rem] sm:h-[1.333rem] sm:top-[0.166rem] sm:left-[0.166rem] md:top-[0.25rem] md:left-[0.25rem] md:w-[2.75rem] md:h-[1.833rem] z-[30]">
  </div></div>`).join('');
    document.getElementById('popular-movies').innerHTML = moviePopularHTML;
}

getMoviesTrending();
getMoviesPopular();
