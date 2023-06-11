// Timer variables
let timerInterval;
let timerSeconds = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchSeconds = 0;

// Timer functions
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  updateTimer();
}

function updateTimer() {
  timerSeconds++;
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;
  document.getElementById("timer").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Stopwatch functions
function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchSeconds = 0;
  updateStopwatch();
}

function updateStopwatch() {
  stopwatchSeconds++;
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  document.getElementById("stopwatch").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Helper function to pad single digits with leading zero
function pad(value) {
  return String(value).padStart(2, "0");
}
