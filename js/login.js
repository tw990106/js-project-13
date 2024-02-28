const logo = document.getElementById("logo")
const TvingButton = document.getElementById("TVING")
const naverButton = document.getElementById("naver")
const kakaoButton = document.getElementById("kakao")
const facebookButton = document.getElementById("facebook")
const twitterButton = document.getElementById("twitter")
const appleButton = document.getElementById("apple")
const CJONEButton = document.getElementById("CJ-ONE")

logo.addEventListener("click",()=>{
    window.location.href = "../index.html"
})

TvingButton.addEventListener("click",()=>{
    window.location.href = "tvingLogin.html"
})

naverButton.addEventListener("click",()=>{
    window.location.href = "https://nid.naver.com/nidlogin.login"
})

kakaoButton.addEventListener("click",()=>{
    window.location.href = "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fcs.kakao.com%2Fhelps%3Fservice%3D52%26category%3D166%26locale%3Dko#login"
})

facebookButton.addEventListener("click",()=>{
    window.location.href = "https://www.facebook.com/?locale=ko_KR"
})

twitterButton.addEventListener("click",()=>{
    window.location.href = "https://twitter.com/i/flow/login"
})

appleButton.addEventListener("click",()=>{
    window.location.href = "https://secure7.store.apple.com/kr/shop/signIn?ssi=1AAABje6Qe04g1qx37E557kJ19bLezoL-PNq6hNd6Y0C7mF6aHaRyFN8AAAAbaHR0cHM6Ly93d3cuYXBwbGUuY29tL2tyL3x8AAIBbfv13pLzm1mZsLbarr_in8dY7DpsqlmSJvmuFHcRSRo"
})

CJONEButton.addEventListener("click",()=>{
    window.location.href = "https://www.cjone.com/cjmweb/login.do?return_url=https://www.cjone.com/cjmweb/main.do?s=m"
})