const precioOriginal = 120;

const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {

const procentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;

}
// console.log({precioOriginal, descuento, procentajePrecioConDescuento, precioConDescuento});

function onClickBtnPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}