// JavaScript source code
var id = null;
function Move() {
    const elem = document.getElementById("animation");
    let x_pos = 0;
    let y_pos = 0;
    let z_pos = 0;

    let x_shift = 0.1;
    let y_shift = 0.1;
    let z_shift = -0.1;
    clearInterval(id);
    // clearInterval(id);
    //if (flag === true) {
    //        clearInterval(id);
    //        flag = true;
    //    }
    //  let interval = document.getElementById("interval").value;
    id = setInterval(frame, 15);
    function frame() {
        //if (pos == 250) clearInterval(id);
        // else {
        x_pos += x_shift;
        y_pos += y_shift;
        z_pos += z_shift;
        elem.style.top = x_pos + 'em';
        elem.style.left = y_pos + 'em';
          elem.style.transform = `translateZ(${z_pos}em)`;

        if (x_pos <= 0.1) x_shift = 0.1;
        if (x_pos >= 8.9) x_shift = -0.1;
        if (y_pos <= 0.1) y_shift = 0.1;
        if (y_pos >= 7.9) y_shift = -0.1;
        if (z_pos <= -5) z_shift = 0.1;
        if (z_pos >= 5) z_shift = -0.1;

        console.log(z_pos);
        //  }
    }
}
