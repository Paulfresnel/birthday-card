// script.js
document
  .querySelector(".start-game-button")
  .addEventListener("click", startGame);

const confettiContainer = document.querySelector(".confetti-container");
let confettiInterval;

const fallingContainer = document.querySelector(".falling-container");

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100) + "%";
  const lightness = Math.floor(Math.random() * 50) + 50 + "%";
  return `hsl(${hue}, ${saturation}, ${lightness})`;
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.backgroundColor = getRandomColor();
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDuration = `${Math.random() * 1 + 1}s`;
  confettiContainer.appendChild(confetti);
  confetti.addEventListener("animationend", () => {
    confetti.remove();
  });
}

function createFallingElement(className) {
  const fallingElement = document.createElement("div");
  fallingElement.className = `falling-element ${className}`;
  fallingElement.style.left = `${Math.random() * 100}vw`;
  fallingContainer.appendChild(fallingElement);

  const animationDuration = Math.random() * 15 + 1;
  fallingElement.style.animation = `fall ${animationDuration}s ease-out infinite`;

  fallingElement.addEventListener("animationend", () => {
    fallingElement.remove();
  });
}

function startConfetti() {
  confettiInterval = setInterval(createConfetti, 500);
}

function stopConfetti() {
  clearInterval(confettiInterval);

  const existingConfetti = document.querySelectorAll(".confetti");
  existingConfetti.forEach((confetti) => {
    confetti.remove();
  });
}

function startGame() {
  fallingContainer.innerHTML = "";

  const fallingInterval = setInterval(() => {
    const randomClass = Math.random() < 0.5 ? "kiss" : "heart";
    createFallingElement(randomClass);
  }, 1000);
}
