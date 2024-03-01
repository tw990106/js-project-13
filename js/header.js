// import { getMoviesPopular } from './main.js';
// async function fetchData() {
//         const data = await getMoviesPopular();
//         console.log(data.results, "ddd");
// }

// fetchData();



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
const trendingBox = document.querySelector('.ko-trending-box')
let toggle = true;
let today = new Date();   

let movieList = [];
let url = new URL(`https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1`);
const IMG_URL = `http://image.tmdb.org/t/p/w500`;



const getMoviesTrending = async () => {
  url = new URL(`https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1`);
  const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg'
      }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  movieList = data.results;
  // render();
  // getMovies(data);
  // console.log(data.results)
  movieList = data.results
  renderTrendingList()
  return data;
}

getMoviesTrending()


console.log(today.toLocaleString())
 

const renderTrendingList = () => {
  console.log('render', movieList)
  for(let i=0; i<10; i++) {
    let movieTitle = movieList[i].title
    trendingBox.innerHTML += `
    <li class="ko-search-content">
      <a href="#"><span class="red">${i+1}</span>${movieTitle}</a>
      </li>`
  }
  document.querySelector('.ko-search-time').textContent = `${today.toLocaleString()} 기준`
} 




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
