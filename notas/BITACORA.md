# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                                               | Se mantiene al recargar (Si/No) |
| ---------------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | Cambio el texto del titulo h1 en tiempo real                            | No                              |
| textContent desde app.js     | Cambio permanentemente el titulo a "Hola TECSUP" al cargar la pagina    | Si                              |
| style.color                  | El color del texto del titulo cambio a azul                             | Si                              |
| classList.add                | El parrafo con la clase mensaje añadio un fondo amarillo                | Si                              |
| createElement + appendChild  | Se creo y añadio un nuevo elemento "JavaScript" al final de la lista ul | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                                           | Cuanto suma por accion                                    |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------- |
| click          | Un clic con el boton izquierdo del mouse sobre el boton Sumar 1 | Suma 1 al contador actual                                 |
| dblclick       | Dos clics rapidos seguidos sobre el boton                       | Suma 2 por la ejecucion doble del evento                  |
| mouseover      | Pasar el cursor por encima del boton sin hacer clic             | Suma 1 cada vez que el puntero entra en el area del boton |

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                                                        | Se recargo la pagina (Si/No) |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El texto del saludo cambio letra por letra en tiempo real                                      | No                           |
| Enviar sin preventDefault               | El mensaje de enviado aparecio un instante y desaparecio porque el navegador recargo la pagina | Si                           |
| Enviar con preventDefault, correo sin @ | Se detuvo la recarga y aparecio el mensaje "Correo no valido: falta @" en color rojo           | No                           |
| Enviar con preventDefault, correo con @ | Se detuvo la recarga y aparecio el mensaje de exito "Enviado: [correo]" limpiando el error     | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875               |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90                 |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510                |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina        | Correcto (Si/No) |
| --------------- | ---------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                              | Si               |
| + Lapicero 3.20 | 15.70                              | Si               |
| + Mochila 89.90 | 105.60                             | Si               |
| Sin Number()    | [Error: toFixed is not a function] | No               |

| Pieza  | Linea de tu codigo donde aparece               | Para que sirve                                                                      |
| ------ | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| DOM    | `document.querySelector("#carrito")`           | Selecciona elementos del HTML para manipularlos o insertar nodos dentro de ellos    |
| Evento | `formProducto.addEventListener("submit", ...)` | Escucha de manera reactiva cuando el usuario envia los datos del formulario         |
| Objeto | `new Producto(...)`                            | Instancia datos estructurados con atributos y metodos propios a partir de una clase |
