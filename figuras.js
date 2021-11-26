//Codigo del Cuadrado
console.group("cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}


//Codigo del triangulo
console.group("triangulos")
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;

}
function areaTriangulo(base, altura){
    return (base * altura) / 2;

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