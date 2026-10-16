# GráficaEspacio — Simulador de compra de impresión

Simulador de compra de metros de impresión para la imprenta Gráfica Espacio, hecho en JavaScript como 3ª pre-entrega.

## Funcionalidades
- Formulario para elegir un rango de metros de impresión y la cantidad.
- Precio por metro según el rango:

  | Rango | Precio por metro |
  |---|---|
  | 1 a 20 m | $800 |
  | 20 a 50 m | $750 |
  | 51 a 100 m | $640 |
  | 100 m o más | $610 |
- Validación de que la cantidad corresponda al rango elegido.
- Carrito con total acumulado.
- Elección de método de pago al finalizar (efectivo con 10% de descuento, tarjeta de crédito o transferencia).

## Tecnologías
HTML5 · CSS3 · JavaScript vanilla (DOM, eventos, `alert`/`prompt`)

## Cómo correrlo localmente
```bash
git clone https://github.com/juancjose/grafica-espacio.git
cd grafica-espacio
```
Abrí `index.html` en el navegador.

## Autor
**Juan José Cáceres** — [@juancjose](https://github.com/juancjose)

## Licencia
Distribuido bajo licencia MIT. Ver [`LICENSE`](LICENSE).
