// hamburger menu
const menuBar = document.querySelector('.menu-bar');
const mainMenu = document.querySelector('.main-menu');
let aLinks = document.querySelectorAll('.nav-links');

menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('isActive');
    mainMenu.classList.toggle('showMenu');
})

aLinks.forEach((aLinks) => {
    aLinks.addEventListener('click', () => {
        menuBar.classList.toggle('showMenu');
        mainMenu.classList.toggle('showMenu');
    });
});

// hero slider effect

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let index = 0;

prev.addEventListener('click', () =>{
    prevSlide();
})

next.addEventListener('click', () =>{
    nextSlide();
})

function prevSlide() {
    if (index === 0){
        index = slides.length -1;
    } else {
        index --;
    }
    changeSlide();  
}
function nextSlide() {
    if (index === slides.length -1){
        index = 0;
    } else {
        index ++;
    }
    changeSlide();  
}
function changeSlide() {
    for (i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    } 
        slides[index].classList.add('active');
}

function autoPlay(){
    nextSlide();
}
// let timer = setInterval(autoPlay, 7000);

// scroll to Top button

const toTop = document.querySelector('.toTop-btn');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 300){
        toTop.classList.add('scrollActive');
    } else {
        toTop.classList.remove('scrollActive');
    }
    
})



