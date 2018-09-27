// Select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Menu initial state
let showMenu = false;

// Toggle function
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

// Link click function
var navLink = document.querySelectorAll('.nav-link'), result;
for (var i = 0; i < navLink.length; i++) {
  result = navLink[i];
  result.addEventListener('click', closeMenu);
}

function closeMenu() {
  //console.log('Hola');
  menu.classList.remove('show');
  showMenu = false;
}

// AOS animations
AOS.init();