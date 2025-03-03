// variables to track timer state
let timer; 
let timeLeft = 25 * 60; 
let isRunning = false; 

// get references to the HTML elements
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// function to update the timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    // format time to always show two digits (e.g., 25:00)
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// function to start the timer
function startTimer() {
    if (!isRunning) { 
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--; 
                updateDisplay(); 
            } else {
                clearInterval(timer); 
                isRunning = false;
                alert("Time's up!"); 
            }
        }, 1000); 
    }
}

// function to pause the timer
function pauseTimer() {
    clearInterval(timer); 
    isRunning = false;
}

// function to reset the timer
function resetTimer() {
    clearInterval(timer); 
    isRunning = false;
    timeLeft = 25 * 60; 
    updateDisplay(); 
}

// event listeners for button clicks
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
