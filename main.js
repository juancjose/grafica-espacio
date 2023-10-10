let carrito = [];
let total = 0;

function iniciarCompra() {
    document.getElementById("compraForm").style.display = "block";
    total = 0;
    document.getElementById("total").textContent = total;
    carrito = [];
}

document.getElementById("iniciarCompraBtn").addEventListener("click", iniciarCompra);

document.getElementById("agregarProductoBtn").addEventListener("click", () => {
    const impresion = document.getElementById("impresion").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (validarCantidad(impresion, cantidad)) {
        const precio = calcularPrecio(impresion, cantidad);

        if (precio > 0) {
            carrito.push({ impresion, cantidad, precio });
            total += precio;

            document.getElementById("total").textContent = total;
            alert(`Producto agregado al carrito. Total: $${total}`);
        }
    } else {
        alert("Cantidad no valida para la opcion seleccionada.");
    }
});

document.getElementById("finalizarCompraBtn").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito esta vacio. Agrega productos antes de finalizar la compra.");
    } else {
        let metodoPago = prompt("Metodo de pago:\n1. Efectivo\n2. Tarjeta de credito\n3. Transferencia bancaria");

        switch (metodoPago) {
            case '1':
                total *= 0.9;
                alert(`Compra realizada con exito. Total: $${total}. Descuento aplicado.`);
                break;
            case '2':
                alert(`Compra realizada con exito. Total: $${total}. Puede pagar con tarjeta de credito.`);
                break;
            case '3':
                alert(`Compra realizada con exito. Total: $${total}. Puede realizar una transferencia bancaria.`);
                break;
            default:
                alert(`Compra realizada con exito. Total: $${total}.`);
        }

        iniciarCompra();
    }
});

function calcularPrecio(impresion, cantidad) {
    let precio = 0;

    switch (impresion) {
        case '1 a 20mts':
            precio = 800;
            break;
        case '20 a 50mts':
            precio = 750;
            break;
        case '51 a 100mts':
            precio = 640;
            break;
        case '100 o mas mts':
            precio = 610;
            break;
        default:
            alert('Opcion incorrecta. Intentelo nuevamente.');
    }

    return precio * cantidad;
}

function validarCantidad(impresion, cantidad) {
    switch (impresion) {
        case '1 a 20mts':
            return cantidad >= 1 && cantidad <= 20;
        case '20 a 50mts':
            return cantidad >= 20 && cantidad <= 50;
        case '51 a 100mts':
            return cantidad >= 51 && cantidad <= 100;
        case '100 o mas mts':
            return cantidad >= 100;
        default:
            return false;
    }
}
