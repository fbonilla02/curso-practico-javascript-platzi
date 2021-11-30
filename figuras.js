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
//Triangulo isóceles
//pagina para entender a calcular triangulo isóceles https://www.universoformulas.com/matematicas/geometria/triangulo-isosceles/
function areaTrianguloIso(lado, base, resultado){
    const altura = alturaTrianguloIso(lado, base, resultado);
    return (base * altura) / 2;
}

//Altura
function alturaTrianguloIso(lado, base){
    const hipotenusa = Math.pow(lado, 2);
    const resultado = Math.sqrt((hipotenusa - (Math.pow(base, 2) / 4)));
    return resultado;
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
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Calcular Triangulo equilatero
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularCircunCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const Circunferencia = perimetroCirculo(value);
    alert(Circunferencia);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
function calcularAreaTrianguloIso(){
    const input1 = document.getElementById("InputTrianguloLado");
    const input2 = document.getElementById("InputTrianguloBase");
    const value1 = input1.value;
    const value2 = input2.value;

    const area = areaTrianguloIso(value1, value2);
    alert(area);
}


function calcularAlturaTrianguloIso(){
    const input1 = document.getElementById("InputTrianguloLado");
    const input2 = document.getElementById("InputTrianguloBase");
    const value1 = input1.value;
    const value2 = input2.value;

    const altura = alturaTrianguloIso(value1, value2);
    alert(altura);

}