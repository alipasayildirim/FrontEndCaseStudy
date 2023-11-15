let timer = document.querySelector('#timer');
let startButton = document.querySelector('#startButton');
let pauseButton = document.querySelector('#pauseButton');
let setButton = document.querySelector('#setButton');
let customTime = document.querySelector('#customTime');

let interval;
let isPaused = true;
let timeLeft;

function updateTimer(minutes, seconds) {
    timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function countdown() {
    if(timeLeft <= 0) {
        clearInterval(interval);
        alert("Süre Doldu!");
        timer.classList.remove('timer-warning');
    } else {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        updateTimer(minutes, seconds);
        if (timeLeft <= 30) {
            timer.classList.add('timer-warning');
        }
        timeLeft--;
    }
}

startButton.addEventListener('click', function() {
    if (isPaused) {
        interval = setInterval(countdown, 1000);
        isPaused = false;
    }
});

pauseButton.addEventListener('click', function() {
    clearInterval(interval);
    isPaused = true;
});

setButton.addEventListener('click', function() {
    let minutes = customTime.value;
    timeLeft = minutes * 60;
    updateTimer(minutes, 0);
    timer.classList.remove('timer-warning');
    isPaused = true;
    clearInterval(interval);
});

updateTimer(0, 0);
