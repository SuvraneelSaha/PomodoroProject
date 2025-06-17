// Timer variables
let totalSeconds = 25 * 60; // 25 minutes
let timerInterval = null;
let isRunning = false;

// Get DOM elements
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
// Classic - Pomodoro Dom elements 
const minutesTens = document.getElementById("minutes-tens");
const minutesOnes = document.getElementById("minutes-ones");
const secondsTens = document.getElementById("seconds-tens");
const secondsOnes = document.getElementById("seconds-ones");


// Start timer function
function startTimer() {
  if (isRunning === false) {
    isRunning = true;
    startBtn.textContent = "Running...";
    pauseBtn.textContent="Pause";

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

// Pause timer
function pauseTimer() {
  if(totalSeconds===25*60){
    startBtn.textContent="Start";
    return;
  }
  clearInterval(timerInterval);
  isRunning = false;
  startBtn.textContent = "Resume";
  pauseBtn.textContent="Paused";
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  totalSeconds = 25 * 60;
  startBtn.textContent = "Start";
  // Update the display
  updateDisplay();
}

// Add event listener
// Wrong - executes immediately
// startBtn.addEventListener('click', startTimer());
// Correct - passes function reference
startBtn.addEventListener("click", startTimer);

// Add event listener
pauseBtn.addEventListener("click", pauseTimer);

// for Reset event listener
resetBtn.addEventListener("click",resetTimer);

// Initialize display
updateDisplay();


// logic for the Custom Pomodoro 
// Custom timer variables
let customTotalSeconds = 25 * 60;
let customTimerInterval = null;
let customIsRunning=false;

// Get custom timer DOM elements -- input values 
const customMinutesInput = document.getElementById("custom-minutes");
const customSecondsInput = document.getElementById("custom-seconds");
const setCustomBtn = document.getElementById("set-custom-btn");

// Get custom display elements -- Custom Timer Display 
const customMinutesTens = document.getElementById("custom-minutes-tens");
const customMinutesOnes = document.getElementById("custom-minutes-ones");
const customSecondsTens = document.getElementById("custom-seconds-tens");
const customSecondsOnes = document.getElementById("custom-seconds-ones");

// Custom Pomodoro - Buttons 
const customStartBtn = document.getElementById("start-btn-custom");
const customPauseBtn = document.getElementById("pause-btn-custom");
const customResetBtn = document.getElementById("reset-btn-custom");


// Set custom timer function
function setCustomTimer() {
  // Get input values
  const minutes = parseInt(customMinutesInput.value) || 0;
  const seconds = parseInt(customSecondsInput.value) || 0;
  
  // Calculate total seconds
  customTotalSeconds = (minutes * 60) + seconds;
  
  // Update the display
  updateCustomDisplay();
}

// Update custom display function
function updateCustomDisplay() {
  const minutes = Math.floor(customTotalSeconds / 60);
  const seconds = customTotalSeconds % 60;
  
  // Split into individual digits
  customMinutesTens.textContent = Math.floor(minutes / 10);
  customMinutesOnes.textContent = minutes % 10;
  customSecondsTens.textContent = Math.floor(seconds / 10);
  customSecondsOnes.textContent = seconds % 10;
}

// Add event listener for set timer button
setCustomBtn.addEventListener('click', setCustomTimer);

// Initialize custom display
updateCustomDisplay();

// Custom Start timer function
function customStartTimer() {
  if (customIsRunning === false) {
    customIsRunning = true;
    customStartBtn.textContent = "Running...";
    customPauseBtn.textContent="Pause";

    customTimerInterval = setInterval(function () {
      if (customTotalSeconds <= 0) {
        clearInterval(customTimerInterval);
        customIsRunning = false;
        customStartBtn.textContent = "Start";
        alert("Time's up!");
        return;
      }
      customTotalSeconds--;
      updateCustomDisplay();
    }, 1000);
  }
}

// Pause timer
function customPauseTimer() {
  clearInterval(customTimerInterval);
  customIsRunning = false;
  customStartBtn.textContent = "Resume";
  customPauseBtn.textContent="Paused";
}

function customResetTimer() {
  clearInterval(customTimerInterval);
  customIsRunning = false;
  customTotalSeconds = 25 * 60;
  customStartBtn.textContent = "Start";
  // Update the display for the Reset Timer 
  updateCustomDisplay();
}

customStartBtn.addEventListener("click", customStartTimer);

// Add event listener
customPauseBtn.addEventListener("click", customPauseTimer);

// for Reset event listener
customResetBtn.addEventListener("click",customResetTimer);

// Initialize display
updateCustomDisplay();
