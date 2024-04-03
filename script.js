// Get the menu toggle and nav menu elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
