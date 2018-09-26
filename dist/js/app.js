// Select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const navLink = document.querySelector('.nav-link');

// Menu initial state
let showMenu = false;

// Toggle function
menuBtn.addEventListener('click', toggleMenu);
navLink.addEventListener('click', toggleMenuLink);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add('show');
    
    showMenu = true;

  } else {
    menu.classList.remove('show');
    
    showMenu = false;
  }
}

function toggleMenuLink() {
    menu.classList.remove('show');
    showMenu = false;
}

// AOS animations
AOS.init();