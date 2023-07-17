let searchBtn =document.querySelector('#search-btn');
let searchBar =document.querySelector('.search-btn-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar')




menu.addEventListener('click',()=> {
  
  
  navbar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});
