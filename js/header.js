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
const deleteAll = document.querySelector('.ko-delete-all')
const searchAllContent = document.querySelector('.ko-search-data')
const ifNoResults = document.querySelectorAll('.ko-no-results')
let toggle = true;
let today = new Date();   

let getMovieList = [];
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
  getMovieList = data.results;
  renderTrendingList()
  return data;
}

getMoviesTrending()

const getKeyword = async () => {
  url = new URL(`https://api.themoviedb.org/3/discover/movie?language=ko&page=1`);
  const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDc2OGMxZTdlYWJmYWI5Y2Q5NGFiNzQyMjNhZjg1YyIsInN1YiI6IjY1ZGQ0NjZjMmFjNDk5MDE3ZGNhZGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xtPAVAUiJC6-xfEkO9tnDb_UHPDTIo3bJaKtMLNdMkg'
      }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log('keyword', data)
  getMovieList = data.results;
  // console.log(getMovieList)
  return data;
}

getKeyword()

const searchMovies = () => {
  const searchTerm = searchInput.value;
  const filteredMovies = movieList.filter(search => search.title.includes(searchTerm));
  // renderMovies(filteredMovies);
  // console.log(searchTerm, filteredMovies)
};


const renderTrendingList = () => {
  // console.log('render', movieList)
  for(let i=0; i<10; i++) {
    let movieTitle = getMovieList[i].title
    trendingBox.innerHTML += `
    <li class="ko-search-content">
      <a href="#"><span class="red">${i+1}</span>${movieTitle}</a>
      </li>`
  }
  document.querySelector('.ko-search-time').textContent = `${today.toLocaleString()} 기준`
} 


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
    // body.style.overflow = 'visible';
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
  if(searchInput.value == '') {
    alert('검색어를 입력해주세요.');
    searchInput.focus()
  } else {
    recentBox.innerHTML += `
    <li class="ko-search-content">
      <p>${searchHistory}</p>
      <button type="button" class="ko-delete" onclick="this.parentElement.remove()">
        <img src="../img/header_close.svg" alt="delete">
      </button>
    </li>`
  }
  searchInput.value =''
}

searchInput.addEventListener('keydown', ()=> {
  if (window.event.keyCode == 13) {
    search()
  }
  deleteAll.style.display = 'block';
  ifNoResults[0].remove();
})

btnInput.addEventListener('click', search)

deleteAll.addEventListener('click', () => {
  while(searchAllContent.firstChild) {
    searchAllContent.removeChild(searchAllContent.firstChild);
    if (recentBox.children.length === 0) {
      deleteAll.style.display = 'none';
  }
  }
  searchAllContent.append(ifNoResults[0]);
  deleteAll.style.display = 'none';
})

// 스크롤 이벤트


window.addEventListener('scroll', function () {
  let st = this.scrollY

  console.log(st)

  if (st > 1) {
    header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  } else {
    header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))';
    header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
  }
});
