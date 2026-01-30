const player = document.getElementById("player");
const select = document.getElementById('playlist');

const arr_date_time = [
    document.getElementById("YYYY"), document.getElementById("MM"), document.getElementById("DD"),
    document.getElementById("hh"), document.getElementById("mm"), document.getElementById("ss")];
const arr_date_time_marker = [
    document.getElementById("YYYY_m"), document.getElementById("MM_m"),
    document.getElementById("DD_m"), document.getElementById("hh_m"),
    document.getElementById("mm_m"), document.getElementById("ss_m")];

const files = [
    "sound/Nightwish_-_Sleeping_Sun_47955629.mp3", "sound/06. Everlost (Part 2).mp3", "sound/07_Dark_Tranquillity_-_Insanity_s_Crescendo.flac",
    "sound/12_Dark_Tranquillity_-_The_Mind_s_Eye.flac", "sound/13. Metaphor.mp3"];


files.forEach(file => {
    const option = document.createElement('option');
    option.value = file;
    option.textContent = file.split("/")[1];
    select.appendChild(option);
});

select.addEventListener('change', () => {
    const selectedFile = select.value;
    console.log(selectedFile);
    if (selectedFile)
        player.src = selectedFile ;
});


document.getElementById("btn").onclick = function rr() {
    let btn = document.getElementById("font");
    btn.innerHTML = btn.innerHTML === "START" ? "STOP" : "START";
    action();

}
function action() {
    let targetDateControl = document.getElementById("target-date");
    let targetTimeControl = document.getElementById("target-time");
    let [year, month, day] = targetDateControl.value.split("-");
    let [hour, minute] = targetTimeControl.value.split(":");
    const target_date = new Date(year, month - 1, day, hour, minute, 0);
    const now_date = new Date();
    let result_date = new Date(target_date - now_date); // 1970/1/1/00:00:00 + разница между датами
    let ml_result = result_date.getTime();

    const offsetMinutes = now_date.getTimezoneOffset();
    const offsetHours = offsetMinutes / 60;
    result_date.setHours(result_date.getHours() + offsetHours);

    const arr_result = [
        result_date.getFullYear() - 1970, result_date.getMonth(), result_date.getDate() - 1,
        result_date.getHours(), result_date.getMinutes(), result_date.getSeconds()];

    for (let i = 0; i < arr_date_time.length; i++) {
        arr_date_time[i].innerHTML = arr_result[i];
        arr_date_time[i].style.display = arr_date_time_marker[i].style.display = arr_date_time[i].innerHTML == 0 ? "none" : "flex";
    }
    if (ml_result < 1000) {
        player.play();
    }
    if (ml_result > 1000 && document.getElementById("font").innerHTML === "STOP")
        setTimeout(action, 100);


}