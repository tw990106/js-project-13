let header = document.getElementById('ko-header')
let btnProfile = document.querySelector('.ko-btn-account')
let btnSearch = document.querySelector('.ko-btn-search')
let btnSearchImg = document.querySelector('.ko-btn-search img')
let dimmed = document.querySelector('.ko-dimmed')
let profileBox = document.querySelector('.ko-account-area')
let searchArea = document.querySelector('.ko-search-area')
let body = document.querySelector('body')
let toggle = true;


console.log(btnSearchImg)
btnProfile.addEventListener('mouseover', function(){
  profileBox.style.display = 'block'
})

profileBox.addEventListener('mouseover', function(){
  profileBox.style.display = 'block'
})

btnProfile.addEventListener('mouseout', function(){
  profileBox.style.display = 'none'
})

profileBox.addEventListener('mouseout', function(){
  profileBox.style.display = 'none'
})

btnSearch.addEventListener('click', function() {
  if(toggle){
    header.style.background = 'transparent';
    body.style.overflow = 'hidden';
    searchArea.style.display = 'block'
    btnSearchImg.src = '../img/header_close.svg'
    btnSearchImg.style.height = '130%'
    btnSearchImg.style.margin = '-.3em 0 0 -.3em'
    dimmed.style.display = 'block'
    toggle = false
  } else {
    header.style.background = 'black';
    body.style.overflow = 'visible';
    searchArea.style.display = 'none'
    btnSearchImg.src = '../img/icon_search.svg'
    btnSearchImg.style.height = '100%'
    btnSearchImg.style.margin = '0'
    dimmed.style.display = 'none'
    toggle = true;
  }

})