var id = null;
function Move() {
    const elem = document.getElementById("animation");
    let x_pos = 0;
    let y_pos = 0;
    let x_shift = 1;
    let y_shift = 1;

    clearInterval(id);
    let interval = document.getElementById("interval").value;
    let font_size = document.getElementById("fontSize").value;
    elem.style.fontSize = `${font_size}px`;
    id = setInterval(frame, interval);
    function frame() {
        const time = new Date();
        document.getElementById("hours-unit").innerHTML = time.getHours();
        document.getElementById("minutes-unit").innerHTML = time.getMinutes();
        document.getElementById("seconds-unit").innerHTML = time.getSeconds();
        let with_screen = window.innerWidth;
        let height_screen = window.innerHeight;
        x_pos += x_shift;
        y_pos += y_shift;
        elem.style.top = x_pos + 'px';
        elem.style.left = y_pos + 'px';
        if (x_pos === 0) x_shift = 1;
        if (x_pos === height_screen - elem.offsetHeight) x_shift = -1;
        if (y_pos === 0) y_shift = 1;
        if (y_pos === with_screen - elem.offsetWidth) y_shift = -1;
    }
}
