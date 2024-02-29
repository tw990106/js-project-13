let btnProfile = document.querySelector('.ko-btn-account')
let profileBox = document.querySelector('.ko-account-area')

btnProfile.addEventListener('mouseover', function(){
  profileBox.style.display = 'block'
  
})

btnProfile.addEventListener('mouseout', function(){
  profileBox.style.display = 'none'
})