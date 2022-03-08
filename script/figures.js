function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return radio * radio * PI;
}

function calculateSquarePerimeter() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const collection = document.getElementsByClassName("results");
    collection[0].innerHTML = perimetro;
}
function calculateSquareArea() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const area = areaCuadrado(value);
    const collection = document.getElementsByClassName("results");
    collection[0].innerHTML = area;
}
function calculateTrianglePerimeter() {
    const input1 = document.getElementById("TriangleInputSideA");
    const input2 = document.getElementById("TriangleInputSideB");
    const base = document.getElementById("TriangleInputBase");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(base.value);
    const perimeter = perimetroTriangulo(value1, value2, value3);
    const collection = document.getElementsByClassName("results");
    collection[1].innerHTML = perimeter;
}
function calculateTriangleArea() {
    const base = document.getElementById("TriangleInputBase");
    const height = document.getElementById("TriangleInputHeight");
    const value1 = parseInt(base.value);
    const value2 = parseInt(height.value);
    const area = areaTriangulo(value1, value2);
    const collection = document.getElementsByClassName("results");
    collection[1].innerHTML = area;
}
function caclulateCirclePerimeter() {
    const radius = document.getElementById("circleInputRadius");
    const value = parseInt(radius.value);
    const perimeter = perimetroCirculo(value);
    const collection = document.getElementsByClassName("results");
    collection[2].innerHTML = parseFloat(perimeter).toFixed(2);
}
function calculateCircleArea() {
    const radius = document.getElementById("circleInputRadius");
    const value = parseInt(radius.value);
    const area = areaCirculo(value);
    const collection = document.getElementsByClassName("results");
    collection[2].innerHTML = parseFloat(area).toFixed(2);
}
function clearFunction(valor) {
    const collection = document.getElementsByClassName("results");
    collection[valor].innerHTML = "";
}
function copyButton(valor) {
    const collection = document.getElementsByClassName("results");
    const copyText = collection[valor];
    navigator.clipboard.writeText(copyText.innerHTML);
    const copybutton = document.getElementsByClassName("tooltiptext");

    if (copyText.innerHTML === "") {
        copybutton[valor].innerHTML = "Error NAN";
    } else {
        copybutton[valor].innerHTML = "Copied: " + copyText.innerHTML;
    }
}
function outCopyButton(valor) {
    const tooltip = document.getElementsByClassName("tooltiptext");
    tooltip[valor].innerHTML = "Copy to clipboard";
}
