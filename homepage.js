
const flipAllBtn = document.getElementById('flipAllBtn'); // Get the button element to flip all cards
const cards = document.querySelectorAll('.card'); // Select all card elements
let areFlipped = false; // Track the flipped state of the cards

// Add a click event listener to the flip all button
flipAllBtn.addEventListener('click', () => {
    areFlipped = !areFlipped; // Toggle the flipped state
    cards.forEach(card => {
        if (areFlipped) {
            card.classList.add('flipped'); // Add 'flipped' class if cards should be flipped
        } else {
            card.classList.remove('flipped'); // Remove 'flipped' class if cards should be unflipped
        }
    });
    
    // Add or remove 'no-hover' class based on the flipped state
    if (areFlipped) {
        cards.forEach(card => card.classList.add('no-hover')); // Disable hover effects when flipped
    } else {
        cards.forEach(card => card.classList.remove('no-hover')); // Enable hover effects when unflipped
    }
});
