// JavaScript source code

function PrintCube() {
    let size = document.getElementById("cube-size").value;
    let result = document.getElementById("cube-result");
    if (size > 30) {
        size = 30;
        document.getElementById("cube-size").value = 30;
    }
    result.innerHTML = "";
    let s = '*';
    let height = size;
    let wit = Number(Number(size) + (Number(size) - 1));

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < wit; j++) {
            if (j % 2 == 0) {
                result.innerHTML += s;
            } else {
                result.innerHTML += "&nbsp &nbsp";
            }
        }
        result.innerHTML += "<br>"
    }
}

function PrintTriangle() {
    let size = document.getElementById("triangle-size").value;
    let num = document.getElementById("triangle-num").value;
    if (num > 4) {
        num = 4;
        document.getElementById("triangle-num").value = 4;
    }
    let result = document.getElementById("triangle-result");
    if (size > 30) {
        size = 30;
        document.getElementById("triangle-size").value = 30;
    }
    result.innerHTML = "";
    let s = '*';
    let height = size;
    let wit = Number(Number(size) + (Number(size) - 1));

    let position = 0, plus_minus = 0;
    switch (Number(num)) {
        case 1:
            position = 1;
            plus_minus = 2;
            break;
        case 2:
            position = wit;
            plus_minus = -2;
            break;
        case 3:
            position = 0;
            plus_minus = 2;
            break;
        case 4:
            position = wit - 1;
            plus_minus = -2;
            break;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < wit; j++) {

            switch (Number(num)) {
                case 1:
                case 2:
                    if (j <= position) {
                        if (j % 2 == 0)
                            result.innerHTML += s;
                        else result.innerHTML += "&nbsp ";
                    }
                    break;
                case 3:
                case 4:
                    if (j >= position) {
                        if (j % 2 == 0)
                            result.innerHTML += s;
                        else result.innerHTML += "&nbsp ";
                    }
                    else {
                        result.innerHTML += "&nbsp ";
                    }
                    break;
            }
        }
        result.innerHTML += "<br>";
        position += plus_minus;
    }
}

function PrintRhombus() {
    let size = document.getElementById("rhombus-size").value;
    let result = document.getElementById("rhombus-result");
    if (size > 30) {
        size = 30;
        document.getElementById("rhombus-size").value = 30;
    }
    result.innerHTML = "";
    let s = '*';
    let height = size;
    let wit = Number(Number(size) + (Number(size) - 1));


    ++wit;

    height *= 2;

    let left = '/', right = '\\';
    let middle = wit / 2, space = 0;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < wit; j++) {
            if (i < height / 2) {

                if (j == (middle - space) - 1)
                    result.innerHTML += left
                else if (j == middle + space)
                    result.innerHTML += right;
                else result.innerHTML += "&nbsp ";

            }
            else {
                if (j == (middle - space) - 1)
                    result.innerHTML += right;
                else if (j == middle + space)
                    result.innerHTML += left;
                else result.innerHTML += "&nbsp ";
            }

        }

        if (i < (height / 2) - 1)
            ++space;
        else if (i >= height / 2)
            --space;
        result.innerHTML += "<br>";
    }
}

function PrintChesBoard() {
    let size = document.getElementById("chessboard-size").value;
    let result = document.getElementById("chessboard-result");
    if (size > 5) {
        size = 5;
        document.getElementById("chessboard-size").value = 5;
    }
    result.innerHTML = "";
    let s = '*';
    let height = size;
    let wit = Number(Number(size) + (Number(size) - 1));

    let selector = true;

    for (let i = 0; i < height * 8; i++)
    {

        if (i % height == 0)
            selector = !selector ? true : false;

        for (let j = 0; j < 4; j++)
        {
            if (!selector) {
                for (let pm = 0; pm < wit; pm++)
                    result.innerHTML += "&nbsp ";
            }

            for (let c = 0; c < wit; c++)
            {
                if (c % 2 == 0)
                    result.innerHTML += s;
                else result.innerHTML += "&nbsp ";
            }


            if (selector) {
                for (let pm = 0; pm < wit; pm++)
                    result.innerHTML += "&nbsp ";
            }

        }
        result.innerHTML += "<br>";
    }

}

function PrintPascal() {
    let size = document.getElementById("pascal-size").value;
    let result = document.getElementById("pascal-result");
    if (size > 30) {
        size = 30;
        document.getElementById("pascal-size").value = 30;
    }
    
    result.innerHTML = "";
    let height = size;
    const nums = [1];

    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size-i; k++)
            result.innerHTML += "&nbsp";
        result.innerHTML += nums;
        result.innerHTML += "<br>";
        if (nums.length === 1)
            nums.push(1);
        else {
            
            const nums2 = [1];
            for (let j = 0; j < nums.length-1; j++) {
                nums2.push(nums[j] + nums[j+1]);
            }
            nums2.push(1);

            nums.length = 0;
            nums.push(...nums2);
            nums2.splice(0, nums.length);


        }
    }

}