// import {getMovies} from './main.js'
// async function fetchData() {
//     let data = await getMovies();
//     console.log(data.results, "ddd");
// }
// fetchData();

const signUpButton = document.getElementById("sign-up-button")
const loginButton = document.getElementById("login-button")
const loginButton2 =document.getElementById("login-button2")
const loginButton3 =document.getElementById("login-button3")
const logo = document.getElementById("logo")

signUpButton.addEventListener("click",()=>{
    window.location.href = "html/login.html"
})

loginButton.addEventListener("click",()=>{
    window.location.href = "html/login.html"
})

loginButton2.addEventListener("click",()=>{
    window.location.href = "html/login.html"
})

loginButton3.addEventListener("click",()=>{
    window.location.href = "html/login.html"
})

logo.addEventListener("click",()=>{
    window.location.href = "../index.html"
})

const bgAni = document.querySelector('.bg-ani')
const bgAni2 = document.querySelector('.bg-ani-02')
const bgAni3 = document.querySelector('.bg-ani-03')
const bgAni4 = document.querySelector('.bg-ani-04')
const bgAni5 = document.querySelector('.bg-ani-05')
const bgAni6 = document.querySelector('.bg-ani-06')
const textAni2= document.querySelector('.text-ani-02')
const textAniSub2 = document.querySelector('.text-ani-sub-02')
const textAni3= document.querySelector('.text-ani-03')
const textAniSub3 = document.querySelector('.text-ani-sub-03')
const textAni4= document.querySelector('.text-ani-04')
const textAniSub4 = document.querySelector('.text-ani-sub-04')
const textAni5= document.querySelector('.text-ani-05')
const textAniSub5 = document.querySelector('.text-ani-sub-05')

const scrollAnime = (className,duration,scrollStart,scrollEnd,scroll)=>{
    if(scroll >= scrollStart && scroll <= scrollEnd){
        className.style.animation = `fadeIn ${duration}s ease-out forwards`
    } else {
        className.style.animation = `fadeOut ${duration}s ease-out forwards`
    }
}

window.addEventListener('scroll',()=>{

    let nav = document.querySelector('.navbar')
    if(window.scrollY > 0){
        nav.classList.add('nav-bg')
    }else{
        nav.classList.remove('nav-bg')
    }

    let scroll = window.scrollY
    scrollAnime(bgAni,1,0,800,scroll)
    scrollAnime(textAni2,1,0,1000,scroll)
    scrollAnime(textAniSub2,2,0,1000,scroll)
    scrollAnime(bgAni2,1,100,1200,scroll)
    scrollAnime(textAni3,1,500,1700,scroll)
    scrollAnime(textAniSub3,2,500,1700,scroll)
    scrollAnime(bgAni3,1,700,1800,scroll)
    scrollAnime(bgAni4,2,700,1900,scroll)
    scrollAnime(textAni4,1,1500,3500,scroll)
    scrollAnime(textAniSub4,2,1500,3500,scroll)
    scrollAnime(bgAni5,2,1500,4000,scroll)
    scrollAnime(textAni5,1,1600,4500,scroll)
    scrollAnime(textAniSub5,2,1600,4500,scroll)
    scrollAnime(bgAni6,2,1700,4500,scroll)
})
