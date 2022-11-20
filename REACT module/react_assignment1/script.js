let hr = min = sec = "0" + 0, startTimer;
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop");
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

function start() {
    startBtn.classList.add("active");
    pauseBtn.classList.remove("pauseActive");
    startTimer = setInterval(() => {
        sec++
        sec = sec < 10 ? "0" + sec : sec;
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
    }, 600);
}

function pause() {
    startBtn.classList.remove("active");
    pauseBtn.classList.add("pauseActive");
    clearInterval(startTimer);
}
function stop() {
    startBtn.classList.remove("active");
    pauseBtn.classList.remove("pauseActive");
    clearInterval(startTimer);
    hr = min = sec = "0" + 0;
    putValue();
}
function putValue() {
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}