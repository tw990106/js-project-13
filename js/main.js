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

const getMovieTopRated = async () => {
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=3');
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg'
        }
    };

    const response = await fetch(url,options);
    const data = await response.json();
    console.log("data", data);
    // fetch(url, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //         .catch(err => console.error(err));
}

getMovieTopRated();
