let hr = min = sec = ms = "0" + 0, startTimer;

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
        ms++
        ms = ms < 10 ? "0" + ms : ms;
        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
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
    }, 10);
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
    hr = min = sec = ms = "0" + 0;
    putValue();
}
function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}