document.addEventListener("DOMContentLoaded", function() {

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
    
});