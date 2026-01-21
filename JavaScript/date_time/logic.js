// JavaScript source code

function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}

document.body.onload = function tick_timer() {
    let time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    document.getElementById("time_now").innerHTML = `${addLeadingZero(time.getHours())}:${addLeadingZero(time.getMinutes())}:${addLeadingZero(time.getSeconds())}`;
    document.getElementById("date_now").innerHTML = `${addLeadingZero(time.getDate())}.${addLeadingZero(time.getMonth() + 1)}.${addLeadingZero(time.getFullYear())}`;

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = ((hours % 12) / 12) * 360 + minutes * 0.5;

    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;

    if (document.getElementById("show-clock").checked) {
        document.getElementById("time").style.display = "none";
        document.getElementById("time_arrow").style.display = "block";
    } else {
        document.getElementById("time").style.display = "block";
        document.getElementById("time_arrow").style.display = "none";
    }



    setTimeout(tick_timer, 1000);
}
