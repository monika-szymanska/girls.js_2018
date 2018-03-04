let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-prev');
let next = document.querySelector('.carousel-next');
let slide = document.querySelectorAll('.single-slide');
let slideWidth = slide[0].clientWidth;
console.log(slideWidth);
let currentIndex = 0;
let slideNumber = slide.length -1;



function goToSlide(index) {
    if(index > slideNumber){
        index = 0;
    } else if (index < 0) {
        index = slideNumber;
    };
   carousel.style.left = -1 * slideWidth * index; 
    currentIndex = index;
};

function slideToNext() {
   goToSlide(currentIndex + 1);
};

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

slideToNext();

function bindEvents() {
  prev.addEventListener('click', slideToPrev); 
    next.addEventListener('click', slideToNext);
    document.addEventListener('keydown', function(event) {
        if(event.key === 'ArrowRight'){
            slideToNext();
        } else if (event.key === 'ArrowLeft') {
            slideToPrev();
        }
    })
};

bindEvents();

setInterval(slideToNext, 4000);

//nFKkTmdALNCKNIEKFSnJIg7TWjozsyq8ksYaMuqi

