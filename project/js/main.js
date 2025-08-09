// Get the element that opens the navigation menu (e.g. a hamburger icon)
// Get the element that closes the navigation menu (e.g. a close icon)
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const nav = document.querySelector('nav');


// When the menuToggle element is clicked, the nav-open
// This typically makes the navigation menu visible
menuToggle.addEventListener('click', () => {
  nav.classList.add('nav-open');
});

// When the menuClose element is clicked, remove the 'nav-open' class from <nav>
// This hides the navigation menu again
// This typically makes the navigation menu visible
menuClose.addEventListener('click', () => {
  nav.classList.remove('nav-open');
});