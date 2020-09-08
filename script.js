// IMAGES SLIDER

const slideContainer = document.querySelector('.wrap');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;
console.log(slideWidth);

slide.style.transform = `translateX(${-slideWidth * index}px)`;
console.log(slides);

const startSlide = ()=>{
    slideId = setInterval(()=>{
        moveToNext();

    }, interval)
};

const getSlides = ()=> document.querySelectorAll('.slide');


slide.addEventListener('transitionend', ()=>{
    slides = getSlides();
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if(slides[index].id === lastClone.id){
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNext = ()=>{
    slides = getSlides();
    if(index >= slides.length - 1) return;
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
}

const moveToPrev = ()=>{
    if(index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
}

slideContainer.addEventListener('mouseenter', ()=>{
    clearInterval(slideId);
})

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);


// BURGER MENU

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-list');
    const navLinks = document.querySelectorAll('.menu-list li');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +1}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');


    });

}

// HEADINGS ANIMATION

function scrollAppear(){
    let text = document.querySelectorAll(".block-title");
    let textPosition; 
    let screenPosition = window.innerHeight /1.2;

    text.forEach(function(item){
        textPosition = item.getBoundingClientRect().top;
        if(textPosition < screenPosition){
            item.classList.add('appear');
        }
    })

}


// All functions
function runFunctions(){
    startSlide();
    navSlide();
    window.addEventListener('scroll', scrollAppear);
}

runFunctions();













