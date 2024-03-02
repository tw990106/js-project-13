document.addEventListener("DOMContentLoaded", function () {

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

});

let movieList = [];
let url = new URL(`https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1`);
const IMG_URL = `http://image.tmdb.org/t/p/w1280`;

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
  movieList = data.results;
  renderPopular();
  renderTop();
}

const render = () => {
  let movieHTML = movieList.map(movie => `<div class="swiper-slide moveup" id="${movie.id}" onclick="window.location.href='detail.html?id=${movie.id}'">
  <img
    class="swiper-background-img"
    src="${IMG_URL}${movie.backdrop_path}"/>
  <div class="swiper-text">
    <h4>${movie.title}</h4>
  </div>
</div>`).join('');
  document.getElementById('trending-movies').innerHTML += movieHTML;
}

const renderPopular = () => {
  let moviePopularHTML = movieList.map(movie => `<li class="swiper-slide moveup" id="${movie.id}" onclick="window.location.href='detail.html?id=${movie.id}'">
  <img
    src="${IMG_URL}${movie.poster_path}"
    alt="${movie.title}"
  />
</li>`).join('');
  document.getElementById('popular-movies').innerHTML += moviePopularHTML;
}

const renderTop = () => {
  let movieTopHTML = ``;
  for (let i = 0; i < movieList.length; i++) {
    movieTopHTML += `<li class="swiper-slide moveup top-movies-item" id="${movieList[i].id}" onclick="window.location.href='detail.html?id=${movieList[i].id}'">
    <a class="rank-num">
      <object data="../img/main_top20/${i+1}.svg" type="image/svg+xml">
        <img src="../img/main_top20/${i+1}.svg" />
      </object>
    </a>
    <img src="https://image.tving.com/upload/cms/caim/CAIM2100/M000364433.jpg/dims/resize/400" alt="${movieList[i].title}" />
  </li>`;
  }
  document.getElementById('top-movies').innerHTML += movieTopHTML;
}

getMoviesTrending();
getMoviesPopular();
