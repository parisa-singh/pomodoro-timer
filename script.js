// Variables
let timer;
let timeLeft = 25 * 60;
let isRunning = false;
let sessionCount = 0;
const alarmSound = new Audio("alarm.mp3");

// Get Elements
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const customTimeInput = document.getElementById("custom-time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const shortBreakButton = document.getElementById("short-break");
const longBreakButton = document.getElementById("long-break");
const sessionCountDisplay = document.getElementById("session-count");

// Function to Update Timer Display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to Update Progress Bar
function updateProgress() {
    let progress = (timeLeft / (25 * 60)) * 100;
    progressBar.value = progress;
}

// Function to Start Timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
                updateProgress();
            } else {
                clearInterval(timer);
                isRunning = false;
                sessionCount++;
                sessionCountDisplay.textContent = sessionCount;
                alarmSound.play();
                alert("Time's up!");
            }
        }, 1000);
    }
}

// Function to Pause Timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Function to Reset Timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
    updateProgress();
}

// Function to Set Custom Time
customTimeInput.addEventListener("change", () => {
    let customTime = parseInt(customTimeInput.value);
    if (customTime > 0) {
        timeLeft = customTime * 60;
        updateDisplay();
        updateProgress();
    }
});

// Function to Start Short Break (5 min)
shortBreakButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 5 * 60;
    updateDisplay();
    updateProgress();
});

// Function to Start Long Break (15 min)
longBreakButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 15 * 60;
    updateDisplay();
    updateProgress();
});

// Event Listeners for Buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize Display
updateDisplay();
updateProgress();
