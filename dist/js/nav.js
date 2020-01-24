const menuBtn = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler-icon');
const navContainer = document.querySelector('#mainNavbar');
const navList = document.querySelector('.navbar-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        icon.classList.add('open');
        navContainer.classList.add('open');
        navList.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        icon.classList.remove('open');
        navContainer.classList.remove('open');
        navList.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}