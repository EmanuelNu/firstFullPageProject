const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li');
const header = document.querySelector('.header.container'); 

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}); 

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#1b314b';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}); 

menuItem.forEach((item) => {
    item.addEventListener('click', ()=>{
        hamburguer.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
});