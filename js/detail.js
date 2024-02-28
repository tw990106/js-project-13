document.addEventListener("DOMContentLoaded", function() {
    
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

});

