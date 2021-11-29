//Codigo del Cuadrado
console.group("cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("triangulos")
function perimetroTriangulo(lado){
    return lado * 3;
}
function areaTriangulo(lado){
    // return (base * altura) / 2;
    return Math.sqrt(3)/ 4 * Math.pow(lado,2);

}
console.groupEnd();


//Codigo del Circulo
console.group("Circulos")

// //Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// //Pi
const PI = Math.PI;
console.log("PI es: " + PI );
// //Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// //Area
function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();


//aqui interactuamos con el HTML

//Calcular Cuadrado
function calcularperimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Calcular Triangulo equilatero
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo")
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}