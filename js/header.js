const header = document.getElementById('ko-header')
const btnProfile = document.querySelector('.ko-btn-account')
const btnSearch = document.querySelector('.ko-btn-search')
const btnInput = document.querySelector('.ko-btn-input')
const btnSearchImg = document.querySelector('.ko-btn-search img')
const dimmed = document.querySelector('.ko-dimmed')
const profileBox = document.querySelector('.ko-account-area')
const searchArea = document.querySelector('.ko-search-area')
const body = document.querySelector('body')
const searchInput = document.getElementById('search_area')
const recentBox = document.querySelector('.ko-search-data')
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


// 최근 검색어

function search () {
  let searchHistory = searchInput.value;
  recentBox.innerHTML += `<li class="ko-search-content">${searchHistory}</li>`
  searchInput.value =''
}

searchInput.addEventListener('keydown', ()=> {
  if (window.event.keyCode == 13) {
    search()
  }
})

btnInput.addEventListener('click', search)


//검색어 입력
