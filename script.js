// Timer variables
let totalSeconds = 25 * 60; // 25 minutes
let timerInterval = null;
let isRunning = false;

// Get DOM elements
const startBtn = document.getElementById("start-btn");
const minutesTens = document.getElementById("minutes-tens");
const minutesOnes = document.getElementById("minutes-ones");
const secondsTens = document.getElementById("seconds-tens");
const secondsOnes = document.getElementById("seconds-ones");
const pauseBtn = document.getElementById("pause-btn");


// Start timer function
function startTimer() {
  if (isRunning === false) {
    isRunning = true;
    startBtn.textContent = "Running...";

    timerInterval = setInterval(function () {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.textContent = "Start";
        alert("Time's up!");
        return;
      }
      totalSeconds--;
      updateDisplay();
    }, 1000);
  }
}

// Update display function
function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  minutesTens.textContent = Math.floor(minutes / 10);
  minutesOnes.textContent = minutes % 10;
  secondsTens.textContent = Math.floor(seconds / 10);
  secondsOnes.textContent = seconds % 10;
}

// Add event listener
// Wrong - executes immediately
// startBtn.addEventListener('click', startTimer());
// Correct - passes function reference
startBtn.addEventListener('click', startTimer);

// Initialize display
updateDisplay();


