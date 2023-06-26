const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYear = "10 Jul 2023"

function countDownTimer() {
    const newYearsDate = new Date(newYear);
    const currentYear = new Date();

    const totalSeconds = (newYearsDate - currentYear)/1000;
    const totalMinutes = totalSeconds/60;
    const totalHours = totalMinutes/60;
    const totalDays = totalHours/24;

    const daysLeft = Math.floor(totalDays);
    const hoursLeft = Math.floor(totalHours % 24);
    const minutesLeft = Math.floor(totalMinutes % 60);
    const secondsLeft = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = daysLeft;
    hoursEl.innerText = formatTime(hoursLeft);
    minutesEl.innerHTML = formatTime(minutesLeft);
    secondsEl.innerHTML = formatTime(secondsLeft);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDownTimer();

setInterval(countDownTimer, 1000);