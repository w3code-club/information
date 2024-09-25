// JavaScript to hide header on scroll down and show on scroll up
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down - hide the header
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        // Scrolling up - show the header
        header.classList.remove('hide');
        header.classList.add('show');
    }
    lastScrollY = window.scrollY;
});
