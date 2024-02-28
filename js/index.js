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
const textAni2= document.querySelector('.text-ani-02')
const textAniSub2 = document.querySelector('.text-ani-sub-02')

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
    scrollAnime(bgAni2,1,400,1000,scroll)
})

