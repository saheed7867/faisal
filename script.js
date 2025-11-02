const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; // milliseconds


    // calculate days,  hours, mins, secs from time difference
    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calmins = Math.floor(timeDifference/1000/60) % 60;
    let calcHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calcDays = Math.floor(timeDifference/1000/60/60/24);
    
    days.textContent = formatTime(calcDays);
    hours.textContent = formatTime(calcHours);
     mins.textContent = formatTime(calmins);
    secs.textContent = formatTime(calSecs);
    


}
const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);

}
const targetDate = new Date("November 08 2025 03:50");
countDown(targetDate);
