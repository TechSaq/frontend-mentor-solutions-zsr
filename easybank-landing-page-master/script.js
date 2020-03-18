const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');


function toggleMenu() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle('active');
    hero.classList.toggle('overlay');
}

hamburger.addEventListener('click', toggleMenu);
hero.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navbar.classList.remove('active');
    hero.classList.remove('overlay');
});
window.addEventListener('scroll', () => {
    hamburger.classList.remove("active");
    navbar.classList.remove('active');
    hero.classList.remove('overlay');
})