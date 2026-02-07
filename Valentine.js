// Valentine.js

// Select elements
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const gifElement = document.getElementById('gif');
const textElement = document.getElementById('text');
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4.crying.gif",
  "../resources/5.crying.gif",
  "../resources/idc.gif"
];

// Preload GIFs
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// Function to move the "No" button randomly on hover or touch
function moveNoButton() {
  const container = document.querySelector('.yes-no');
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Calculate random position within the container
  let newLeft = Math.random() * (containerRect.width - btnRect.width);
  let newTop = Math.random() * (containerRect.height - btnRect.height);

  // Ensure it doesn't go out of bounds
  newLeft = Math.max(0, Math.min(newLeft, containerRect.width - btnRect.width));
  newTop = Math.max(0, Math.min(newTop, containerRect.height - btnRect.height));

  // Apply position
  noBtn.style.position = 'absolute';
  noBtn.style.left = newLeft + 'px';
  noBtn.style.top = newTop + 'px';
}

// Add event listeners for "No" button hover and touch (for mobile compatibility)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton); // For touch devices

// Add keyboard support for moving "No" button (on focus/keydown for accessibility)
noBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    moveNoButton();
  }
});

// Keep the original click logic for "No" button, but integrate with moving
noBtn.addEventListener("click", () => {
  if (count == 2) {
    gifElement.src = "rusure.gif";
    textElement.innerHTML = "Bakitt????? Dapat yes yon diba??🤨";
    yesBtn.style.height = "30%";
    yesBtn.style.width = "30%";
    noBtn.style.width = "25%";
    count++;
  } else if (count == 3) {
    gifElement.src = "3shocked-1.gif";
    textElement.innerHTML = "NOOOO🥹";
    yesBtn.style.height = "40%";
    yesBtn.style.width = "40%";
    noBtn.style.width = "15%";
    count++;
  } else if (count == 4) {
    gifElement.src = "4.crying.gif";
    textElement.innerHTML = "Iyoccccccc akuuu😭";
    yesBtn.style.height = "50%";
    yesBtn.style.width = "50%";
    noBtn.style.fontSize = "3vh";
    noBtn.style.width = "5%";
    count++;
  } else if (count == 5) {
    gifElement.src = "5.crying.gif";
    textElement.innerHTML = "Pretty Please🥺😘";
    yesBtn.style.height = "60%";
    yesBtn.style.width = "60%";
    noBtn.style.display = "none";
  }
});

// Add event listener for "Yes" button click
yesBtn.addEventListener("click", () => {
  vid.style.display = "heart.webm";
  gifElement.src = "idc.gif";
  textElement.innerHTML = "YEYYYYYYYYYYY 😘";
  yesBtn.innerHTML = '<a href="https://www.instagram.com/areyviyihen/" aria-label="Link to message me on Instagram">Message me</a>';
  yesBtn.style.height = "90%";
  yesBtn.style.width = "96%";
  noBtn.style.display = "none";
  setTimeout(() => {
    vid.style.display = "heart.webm";
  }, 9000);
});

// Optional: Add a counter for "No" interactions to change text after a few attempts (integrated with existing count)
let noInteractionCount = 0;
function incrementNoCount() {
  noInteractionCount++;
  if (noInteractionCount > 5 && count <= 5) {
    textElement.innerHTML = "BILIIII NAAAA 😢";
  }
}
noBtn.addEventListener('mouseover', incrementNoCount);
noBtn.addEventListener('touchstart', incrementNoCount);
noBtn.addEventListener('keydown', incrementNoCount); // For keyboard