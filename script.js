
// IMAGES SLIDER

let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;


//Clear all images
function reset(){
    for(let i = 0; i< sliderImages.length; i++){
        sliderImages[i].style.display = "none";

    }
}


// Init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';

}

//Show prev
function slideLeft(){
    reset();
    sliderImages[current-1].style.display = 'block';
    current--;
}



//Show next
function slideRight(){
    reset();
    sliderImages[current+1].style.display = 'block';
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', ()=>{

    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

//Right arrow click
arrowRight.addEventListener('click', ()=>{
    // clearInterval();
    // document.querySelector('.navbar').style.border = "1px solid black";

    if(current === sliderImages.length -1){
        current = -1;

    }
    slideRight();
})



// setInterval(function(){
//     if(current === sliderImages.length -1){
//         current = -1;

//     }
//     slideRight();
// }, 4000);






// MENU

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


// All functions
function runFunctions(){
    //Start slide function
    startSlide();
    // Run function
    navSlide();

}

runFunctions();


// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );



// let blueIcons = document.querySelectorAll(".icon > .img-container");

// // blueIcon.addEventListener("click", ()=>{
// //     blueIcon.style.backgroundColor = "yellow";
// // })

// // for(let i = 0; i < blueIcon.length; i++){
// //     blueIcon[i].addEventListener("toggle", ()=>{
// //         blueIcon[i].style.backgroundColor = "yellow";
// //     })
// // }

// blueIcons.forEach(function(userItem){

//     // userItem.addEventListener("toggle",()=>{
        
//     // })


//     userItem.addEventListener("mouseenter", ()=>{
        
//         userItem.style.backgroundColor = "yellow";
//     })

//     userItem.addEventListener("mouseleave", ()=>{
        
//         userItem.style.backgroundColor = "#acd7e6";
//     })



// })


// console.log(blueIcon);
// // console.log(node.parentNode.childNodes[]);

function scrollAppear(){
    let text = document.querySelectorAll(".block-title");
    let textPosition; 
    let screenPosition = window.innerHeight /1.2;
    
    // if(textPosition < screenPosition){
    //     text.classList.add('appear');
    // }
    text.forEach(function(item){
        textPosition = item.getBoundingClientRect().top;
        if(textPosition < screenPosition){
            item.classList.add('appear');
        }
    })



}

    window.addEventListener('scroll', scrollAppear);

// scrollAppear();