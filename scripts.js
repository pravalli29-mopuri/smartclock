function updateClock() {
    const now = new Date();
    const sec = now.getSeconds() / 60 * 360;
    const min = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
    const hr = (now.getHours() % 12 + now.getMinutes() / 60) / 12 * 360;
    
    document.getElementById('second').style.transform = rotate(${sec}deg);
    document.getElementById('minute').style.transform = rotate(${min}deg);
    document.getElementById('hour').style.transform = rotate(${hr}deg);

    document.getElementById('digital-clock').textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
