const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const bottomHover = document.querySelector('.bottom-hover');
const navItems = document.querySelectorAll(".menu li");

function toggleMenu() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle('active');
    hero.classList.toggle('overlay');
}

function showBottomHover() {
    const coords = this.getBoundingClientRect();

    bottomHover.classList.add('show');

    const top = coords.top + 30;
    const newCoords = {
        top: `${top}px`,
        left: `${coords.left}px`,
        width: `${coords.width}px`,
    }
    bottomHover.style.top = newCoords.top;
    bottomHover.style.left = newCoords.left;
    bottomHover.style.width = newCoords.width;

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
});

navItems.forEach(navItem => navItem.addEventListener('mouseenter', showBottomHover));