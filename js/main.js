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
    let listSwiper = new Swiper('.list-swiper-container', {
        // 옵션 설정
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        // observer: true,
        // observeParents: true,
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.list-swiper-button-next',
            prevEl: '.list-swiper-button-prev',
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
const API_KEY = `api_key=6f97625a1c75f3ce06489a0e5b0ebda1`;
const BASE_URL = `http://api.themoviedb.org/3/`;
const API_URL = BASE_URL + `discover/movie?sort_by=popularity.desc&` + API_KEY;
const IMG_URL = `http://image.tmdb.org/t/p/w500`;
const main = document.getElementById("main");

getMovies(API_URL);

 export function getMovies(url){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
            return data;
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
};

function showMovies(data){
    main.innerHTML = ``;

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieE1 = document.createElement(`div`);
        movieE1.innerHTML = `<div class="swiper-wrapper item-wrapper itemlist">
        <div class="swiper-slide item">
          <img
            src="${IMG_URL}${poster_path}" alt="${title}"
          />
        </div>
        </div>`; // 이미지 URL 구성 수정
                        
        main.appendChild(movieE1);
    });
}  


