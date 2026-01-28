// JavaScript source code
var id = null;
function Move() {
    const elem = document.getElementById("animation");
    let x_pos = 0;
    let y_pos = 0;
    let x_shift = 1;
    let y_shift = 1;
    clearInterval(id);
    // clearInterval(id);
    //if (flag === true) {
    //        clearInterval(id);
    //        flag = true;
    //    }
    let interval = document.getElementById("interval").value;
    id = setInterval(frame, interval);
    function frame() {
        //if (pos == 250) clearInterval(id);
        // else {
        x_pos += x_shift;
        y_pos += y_shift;
        elem.style.top = x_pos + 'px';
        elem.style.left = y_pos + 'px';
        if (x_pos === 0) x_shift = 1;
        if (x_pos === 350) x_shift = -1;
        if (y_pos === 0) y_shift = 1;
        if (y_pos === 250) y_shift = -1;
        //  }
    }
}
