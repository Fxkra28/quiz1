// button that toggles the navigation menu using its ID 'navbar-toggler'
const navBtn = document.querySelector('#navbar-toggler');

// div that contains the navigation menu using its class 'navbar-collapse'
const navDiv = document.querySelector('.navbar-collapse');

// Click event listener to the navigation button
navBtn.addEventListener('click', () => {
    // Toggle the 'showNav' class on the navigation div, to controls the visibility of the menu
    navDiv.classList.toggle('showNav');
});

// Declare a variable to hold the resize timer
let resizeTimer;

// Add an event listener for the window's 'resize' event
window.addEventListener('resize', () => {
    // Add a class 'resize-animation-stopper' to the body to stop animations and transitions
    document.body.classList.add('resize-animation-stopper');

    // Clear any set resize timer to prevent multiple timers from running
    clearTimeout(resizeTimer);

    // Set a new timer that will remove the 'resize-animation-stopper' class
    resizeTimer = setTimeout(() => {
        // allow animations and transitions to run again
        document.body.classList.remove('resize-animation-stopper');
    }, 400); // 400 milliseconds delay before re-enabling animations
});
