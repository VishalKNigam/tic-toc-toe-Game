// Get the navbar links and attach click event listeners
const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", handleNavbarLinkClick);
});

// Handle navbar link clicks
function handleNavbarLinkClick(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");

  // Scroll to the target section smoothly
  document.querySelector(target).scrollIntoView({
    behavior: "smooth"
  });
}

// Restart the game
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", restartGame);

// Function to restart the game
function restartGame() {
  // Remove all class names and text content from cells
  cells.forEach((cell) => {
    cell.className = "grid-cell";
    cell.textContent = "";
  });

  // Reset the game over text
  const gameOverText = document.querySelector(".game-over-text");
  gameOverText.textContent = "";

  // Reset the current player
  currentPlayer = "x";

  // Update the current player text
  const currentPlayerText = document.querySelector(".current-player");
  currentPlayerText.textContent = "It's X's turn";

  // Enable all cells
  cells.forEach((cell) => {
    cell.classList.remove("disabled");
  });
}
