// Function to generate a random position within the viewport
function getRandomPosition() {
    const x = Math.random() * (window.innerWidth);  // Random X position (leave space for ad width)
    const y = Math.random() * (window.innerHeight); // Random Y position (leave space for ad height)
    console.log(window.innerWidth);
    console.log(window.innerHeight);
   
    return { x, y };
}

// Function to show the popup ad
function showPopupAd() {
    const popupAd = document.querySelector('.popup-ad');
    const { x, y } = getRandomPosition(); // Get random position

    // Set the new position of the popup ad
    popupAd.style.left = `${x}px`;
    popupAd.style.top = `${y}px`;

    // Make the ad visible
    popupAd.style.visibility = 'visible';
    popupAd.style.opacity = 1;

    // Set a random timeout for it to disappear
    const disappearTime = Math.floor(Math.random() * (5000 - 2000) + 2000); // Between 2s and 5s
    setTimeout(() => {
        popupAd.style.opacity = 0;
        setTimeout(() => {
            popupAd.style.visibility = 'hidden'; // Hide after fade out
        }, 500); // Fade-out duration time
    }, disappearTime);
}

// Start showing popups at random intervals
setInterval(showPopupAd, Math.floor(Math.random() * (10000 - 5000) + 5000)); // Show ad every 5 to 10 seconds
