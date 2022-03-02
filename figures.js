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
    alert("El perímetro es " + perimetro);
}
function calculateSquareArea() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es " + area);
}
function calculateTrianglePerimeter() {
    const input1 = document.getElementById("TriangleInputSideA");
    const input2 = document.getElementById("TriangleInputSideB");
    const base = document.getElementById("TriangleInputBase");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(base.value);
    const perimeter = perimetroTriangulo(value1, value2, value3);
    alert("The perimeter of your triangle is " + perimeter);
}
function calculateTriangleArea() {
    const base = document.getElementById("TriangleInputBase");
    const height = document.getElementById("TriangleInputHeight");
    const value1 = parseInt(base.value);
    const value2 = parseInt(height.value);
    const area = areaTriangulo(value1, value2);
    alert("The area of your triangle is " + area);
}
function caclulateCirclePerimeter() {
    const radius = document.getElementById("circleInputRadius");
    const value = parseInt(radius.value);
    const perimeter = perimetroCirculo(value);
    alert("The perimeter of your circle is: " + perimeter);
}
function calculateCircleArea() {
    const radius = document.getElementById("circleInputRadius");
    const value = parseInt(radius.value);
    const area = areaCirculo(value);
    alert("The area of your circle is: " + area);
}
