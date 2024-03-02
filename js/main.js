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
const IMG_URL = `http://image.tmdb.org/t/p/original`;

const sendDetail = async (id) => {
    window.location.href = `detail.html?id=${id}`;
}
export { sendDetail };

const sendSearch = async (data) => {
    return sendSearch;
}
export { sendSearch };

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
    getMoviesTrending(data);
    return data;

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
    // console.log("d", data);
    movieList = data.results;
    // console.log(movieList);
    renderPopular();
    renderTop();
}

const render = () => {
    // console.log("render", movieList);
    let movieHTML = movieList.map(movie => `<div class="swiper-slide" id="${movie.id}" onclick="sendDetail("${movie.id}")">
    <img class="swiper-background-img" src="${IMG_URL}${movie.poster_path}"/>
    <div class="swiper-text">
      <h4>${movie.title}</h4>
      <p>${movie.overview}</p>
    </div>
  </div>`).join('');
    movieHTML += `<div class="swiper-pagination"></div>

  <div class="swiper-button-prev auto-swiper-button-prev">
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="swiper-button-next auto-swiper-button-next">
    <i class="fa-solid fa-chevron-left"></i>
  </div>`;
//   console.log(movieHTML);
    document.getElementById('trending-movies').innerHTML += movieHTML;
}

const renderPopular = () => {
    // console.log("renderPopular", movieList);
    let moviePopularHTML = movieList.map(movie => `<div class="swiper-slide item id="${movie.id}">
  <img
  src="${IMG_URL}${movie.poster_path}" />
  <div
    class="label-wrapper newepisode-label-wrapper absolute sm:w-[2rem] sm:h-[1.333rem] sm:top-[0.166rem] sm:left-[0.166rem] md:top-[0.25rem] md:left-[0.25rem] md:w-[2.75rem] md:h-[1.833rem] z-[30]">
  </div></div>`).join('');
  moviePopularHTML += `      <div class="swiper-button-prev manual-swiper-button-prev">
  <i class="fa-solid fa-chevron-right"></i>
</div>
<div class="swiper-button-next manual-swiper-button-next">
  <i class="fa-solid fa-chevron-left"></i>
</div>`;
    document.getElementById('popular-movies').innerHTML += moviePopularHTML;
}

const renderTop = () => {
    console.log("EUN JI", movieList);
    let movieTopHTML = ``;
    movieTopHTML = movieList.map(movie => `<div id="${movie.id}" class="swiper-slide">
    <a class="rank-num">
      <svg class="margin-right" width="54" height="83" viewBox="0 0 54 83" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="css-17vwk9j">
        <path
          d="M20.107.766C17.711 7 14.286 12.782 2.157 13.866l-1.3 8.673h10.595L1.86 86.505h15.072L29.79.765h-9.683z"
          fill="#fff"></path>
      </svg>
    </a>
    <img
    src="${IMG_URL}${movie.poster_path}"
      class="card-img-top" alt="..." />
  </div></div>`).join('');

    document.getElementById('top-movies').innerHTML += movieTopHTML;
}




getMoviesTrending();
getMoviesPopular();
