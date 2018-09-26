// Select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Menu initial state
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add('show');
    
    showMenu = true;
  } else {
    menu.classList.remove('show');
    
    showMenu = false;
  }
}

AOS.init();