const blurDiv = document.querySelector('#navBlurDiv');
const sideNav = document.querySelector('#sideNavDiv');

const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menu.addEventListener('click', function(){
 sideNav.classList.remove('side-hide');
 sideNav.classList.add('side-show');
 blurDiv.classList.add('nav-blur');
 blurDiv.classList.remove('side-hide');
});


closeMenu.addEventListener('click', function(){
 sideNav.classList.remove('side-show');
 sideNav.classList.add('side-hide');
 blurDiv.classList.remove('nav-blur');
 blurDiv.classList.add('side-hide');

});