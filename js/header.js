const header = document.getElementById('ko-header')
const btnProfile = document.querySelector('.ko-btn-account')
const btnSearch = document.querySelector('.ko-btn-search')
const btnSearchImg = document.querySelector('.ko-btn-search img')
const dimmed = document.querySelector('.ko-dimmed')
const profileBox = document.querySelector('.ko-account-area')
const searchArea = document.querySelector('.ko-search-area')
const body = document.querySelector('body')
const searchInput = document.getElementById('search_area')
const recentBox = document.querySelector('.ko-search-data')
let toggle = true;
let totalPage;
let totalResults;


// searchInput.addEventListener('keyup', () => {
//   console.log(searchInput.value)
//   getURL()
// })



//API KEY; ff880c77cb25a7bbdec9c2baa76b9913
// API TOKEN; eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjg4MGM3N2NiMjVhN2JiZGVjOWMyYmFhNzZiOTkxMyIsInN1YiI6IjY1ZTE3ZWZlOWRlZTU4MDE3YzdkZDRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSGxEPuB3jNdmTiyivSOWwfG-HUGHhjieTRX4w6vzmw
// search/movie?query=${searchInput.value}
const API_KEY ='6f97625a1c75f3ce06489a0e5b0ebda1'
// let url = new URL (`https://api.themoviedb.org/3/discover/movie/157336/videos?api_key=${API_KEY}&language=ko`)
let url = new URL (`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=ko&country=ko&page=50`)

const getURL = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)

  for(let i = 0; i < 20; i++) {
    console.log(data.results[i].popularity)
  }
}

const searchMovie = () => {
  url = new URL(`https://api.themoviedb.org/3/discover/movie?query=${searchInput.value}&language=ko&page=10&api_key=${API_KEY}`)
  getURL()
}

const trendingMovie = () => {
  url = new URL (`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=ko&country=ko&page=10`)
  getURL()
}

trendingMovie()

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

searchInput.addEventListener('keydown', () => {
  if (window.event.keyCode == 13) {
    let searchHistory = searchInput.value;
    recentBox.innerHTML += `<li class="ko-search-content">${searchHistory}</li>`
    searchInput.value =''
  }
})


//검색어 입력
