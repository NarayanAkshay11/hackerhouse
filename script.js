document.addEventListener("DOMContentLoaded", function() {
  // Get all card elements
  var cards = document.querySelectorAll('.card');

  // Set initial index and total number of cards
  var currentIndex = 0;
  var totalCards = cards.length;

  // Get card wrapper element
  var cardWrapper = document.querySelector('.card-wrapper');

  // Define function to move cards
  function moveCards() {
    // Move to next card or loop back to the first card
    currentIndex = (currentIndex + 1) % totalCards;

    // Calculate translation value
    var translateValue = -currentIndex * cards[0].offsetWidth;

    // Apply CSS transform to move the cards
    cardWrapper.style.transform = 'translateX(' + translateValue + 'px)';

    // Call moveCards function recursively after 3 seconds
    setTimeout(moveCards, 3000); // Adjust timing here (milliseconds)
  }

  // Start moving the cards
  moveCards();
});



document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    burger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show-dropdown');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
        form.reset();
    });
});
