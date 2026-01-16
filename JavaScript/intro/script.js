// JavaScript source code

function Factorial(n) {
    let f = BigInt(1);
    // document.write(typeof (f));
    /// document.write("<pre>"); // учитываются пробелы и знаки переноса
    for (let i = 1n; i <= n; i++) {
        f *= i;
        // document.writeln(`${i}! = ${f};`);
    }
    // document.write("</pre>");
    return f;
}

function Factorial2() {
    let source_input_field = document.getElementById("factorial-source");
    // alert("Привет");
    let source_value = source_input_field.value;
    let factorial_result = document.getElementById("factorial-result");
    factorial_result.innerHTML = Factorial(source_value);
}

function Power() {
    let number = document.getElementById("number-for-power").value;
    let power = document.getElementById("power-for-number").value;
    let result = document.getElementById("power-result");
    result.innerHTML = Math.pow(number, power);
}

function NumberMaxFib() {
    let number = document.getElementById("number-max-fib").value;
    let result = document.getElementById("number-max-fib-result");
    result.innerHTML = "";
    let a = 0;
    let b = 1;
    let next;
    if (number != 0) {
        result.innerHTML += `${a}, ${b}`;
        for (let i = 0; i <= number; i += a) {
            result.innerHTML += ", ";
            next = a + b;
            result.innerHTML += `${next}`;
            a = b;
            b = next;
        }
    }
}

function NumberCountFib() {
    let number = document.getElementById("number-count-fib").value;
    let result = document.getElementById("number-count-fib-result");
    result.innerHTML = "";
    let a = 0;
    let b = 1;
    let next;
    
    if (number > 1) {
        result.innerHTML += `${a}, ${b}`;
        for (let i = 2; i < number; i++) {
            result.innerHTML += ", ";
            next = a + b;
            result.innerHTML += `${next}`;
            a = b;
            b = next;
        }
    }
}

function decimalToBinary() {
    let number = document.getElementById("decimal-to-binary").value;
    let result = document.getElementById("decimal-to-binary-result");
    result.innerHTML = Number(number).toString(2);
}

function decimalToHexadecimal() {
    let number = document.getElementById("decimal-to-hexadecimal").value;
    let result = document.getElementById("decimal-to-hexadecimal-result");
    result.innerHTML = Number(number).toString(16);
}

function binaryToDecimal() {
    let number = document.getElementById("binary-to-decimal").value;
    let result = document.getElementById("binary-to-decimal-result");
    result.innerHTML = parseInt(number, 2);
}
function hexadecimalToDecimal() {
    let number = document.getElementById("hexadecimal-to-decimal").value;
    let result = document.getElementById("hexadecimal-to-decimal-result");
    result.innerHTML = parseInt(number, 16);
}

function binaryToHexadecimal() {
    let number = document.getElementById("binary-to-hexadecimal").value;
    let result = document.getElementById("binary-to-hexadecimal-result");
    let decimal = parseInt(number, 2);
    result.innerHTML = Number(decimal).toString(16);
}
