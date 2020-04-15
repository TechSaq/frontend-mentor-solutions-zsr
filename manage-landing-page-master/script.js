// testimonial slider start
const sliderArea = document.querySelector('.testimonials-wrapper');

const allSlides = document.querySelectorAll('.testimonial');
const allDots = document.querySelectorAll('.dot');

const allSlidesCount = allSlides.length;
const allDotsCount = allDots.length;

let currentIndex = 0;

function goToSlide(n) {
    allSlides[currentIndex].classList.remove('active');
    allDots[currentIndex].classList.remove('active');
    currentIndex = (n + allSlidesCount) % allSlidesCount;
    allSlides[currentIndex].classList.add('active');
    allDots[currentIndex].classList.add('active');
}

autoSlide = setInterval(() => {
    goToSlide(currentIndex + 1);
}, 2500);


const thresholdDistance = 70;
let startX = 0;
let endX = 0;

const handleStart = (e) => {
    e.preventDefault();
    startX = Math.round(e.touches[0].pageX);
}

const handleMove = (e) => {
    console.log('end', e);
    endX = Math.round(e.touches[0].pageX);

}

const handleEnd = (e) => {
    console.log(e);

    e.preventDefault();
    if (startX - endX > thresholdDistance) {
        goToSlide(currentIndex + 1)
    }
    if (endX - startX > thresholdDistance) {
        goToSlide(currentIndex - 1);
    }
}

sliderArea.addEventListener('touchstart', handleStart);
sliderArea.addEventListener('touchend', handleEnd);
sliderArea.addEventListener('touchmove', handleMove);

// testimonial slide end