document.getElementById("btn").onclick = function rr() {
    let btn = document.getElementById("font");
    btn.innerHTML = btn.innerHTML === "START" ? "STOP" : "START";
    action();
}
function action() {
    let year = 2026, month = 2, day = 23, hour = 0, minute = 0;
    const target_date = new Date(year, month - 1, day, hour, minute, 0);
    const now_date = new Date();
    let result_date = new Date(target_date - now_date); // 1970/1/1/00:00:00 + разница между датами
    let ml_result = result_date.getTime();

    const offsetMinutes = now_date.getTimezoneOffset();
    const offsetHours = offsetMinutes / 60;
    result_date.setHours(result_date.getHours() + offsetHours);

    document.getElementById("YYYY").innerHTML = result_date.getFullYear() - 1970;
    document.getElementById("MM").innerHTML = result_date.getMonth();
    document.getElementById("DD").innerHTML = result_date.getDate() - 1;
    document.getElementById("hh").innerHTML = result_date.getHours();
    document.getElementById("mm").innerHTML = result_date.getMinutes();
    document.getElementById("ss").innerHTML = result_date.getSeconds();

    if (ml_result > 1000 && document.getElementById("font").innerHTML === "STOP")
        setTimeout(action, 100);
}







