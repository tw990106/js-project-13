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
});

import {getMovies } from './main.js';

// API_URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&${API_KEY}`;

async function fetchData() {
    const data = getMovies();
    console.log(data.results, "ddd");
}

fetchData();

/*async function fetchData() {
    const data = getMovies();
    console.log(data, results, 'ddd');
}
fetchData(); */

