
function add() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a + b);
}


function subtract() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a - b);
}


function multiply() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a * b);
}


function divide() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a / b);
}


function square() {

    let a = Number(document.getElementById("num1").value);

    document.getElementById("result").innerHTML = "Result: " + (a * a);
}


function cube() {

    let a = Number(document.getElementById("num1").value);

    document.getElementById("result").innerHTML = "Result: " + (a * a * a);
}


function clearResult() {

    document.getElementById("result").innerHTML = "Result:";
}