//Codigo del Cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();
//Codigo del triangulo
console.group("triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del triangulo
console.group("Circulos")

//Radio
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del Circulo es: " + diametroCirculo + "cm");
//Pi
const PI = Math.PI;
console.log("PI es: " + PI );

//Circunferencia
const perimetroCirculo = diametroCirculo  * PI;
console.log("La circunferencia es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo)  * PI;
console.log("El área del circulo es: " + areaCirculo + "cm^2");



console.groupEnd();