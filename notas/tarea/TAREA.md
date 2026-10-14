# Tarea: Mi componente interactivo

## Componente elegido

Gestor de Tareas (To-Do List) interactivo para organizar tareas diarias, con opciones de agregar, marcar como completadas y eliminar tareas, incluyendo validación de entrada.

## Version 1: solo DOM

- **Qué agregué:** Estructura HTML básica con un formulario e inputs, y manipulación directa del DOM creando elementos `<li>` en la lista usando `createElement` y `appendChild`.
- **Por qué:** Para comprobar la selección y creación dinámica de elementos visuales sin agregar interacción aún.
- **Qué cambió:** La página renderizó los elementos iniciales desde el código JavaScript.

## Version 2: con eventos

- **Qué agregué:** Escuchadores de eventos (`submit`, `input` y `click`) junto con `preventDefault()` para procesar el formulario sin recargar la página, y la validación para impedir campos vacíos.
- **Por qué:** Para hacer la interfaz reactiva a las acciones del usuario en tiempo real.
- **Qué cambió:** Ahora el usuario puede presionar botones, ver mensajes de error dinámicos en rojo si el campo está vacío, y borrar elementos interactivos.

## Version 3: con clases y objetos

- **Qué agregué:** Las clases `Tarea` (con estado y descripción) y `GestorTareas` (con arreglo de ítems y métodos `agregar` y `eliminar`).
- **Por qué:** Para separar la lógica de datos de la manipulación visual del DOM, logrando un código modular y mantenible.
- **Qué cambió:** Los datos de las tareas ahora se guardan como objetos ordenados en memoria antes de dibujarse en la pantalla.

## Donde uso DOM, eventos y objetos

| Pieza  | Línea / Elemento de código                                                               | Para qué sirve                                                                                  |
| ------ | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| DOM    | `document.createElement("li")` / `listaTareas.appendChild(li)`                           | Crea y coloca nuevos nodos visuales en el árbol HTML.                                           |
| Evento | `formTarea.addEventListener("submit", ...)` / `btnEstado.addEventListener("click", ...)` | Escucha las acciones del usuario (enviar formulario, hacer clic) y ejecuta respuestas.          |
| Objeto | `new Tarea(texto)` / `new GestorTareas()`                                                | Modela la información con atributos (`texto`, `completada`) y métodos propios (`toggleEstado`). |

## Pruebas realizadas

| Caso | Acción                                                   | Resultado esperado                                               | Resultado obtenido                                           | Cumple (Sí/No) |
| ---- | -------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ | -------------- |
| 1    | Enviar el formulario con el campo vacío                  | Mostrar mensaje de error visible en la página sin agregar tareas | Muestra "Error: El texto de la tarea no puede estar vacío."  | Sí             |
| 2    | Escribir "Estudiar para el examen de JS" y enviar        | Agregar la tarea a la lista visual                               | La tarea aparece correctamente agregada en la lista          | Sí             |
| 3    | Hacer clic en el botón "Completar" de una tarea          | Tachar el texto de la tarea y cambiar el fondo a verde claro     | Se añade la clase `.completada` y se tacha el texto          | Sí             |
| 4    | Hacer clic en el botón "Eliminar"                        | Remover la tarea correspondiente de la lista                     | La tarea desaparece del DOM y del arreglo                    | Sí             |
| 5    | Escribir en el input teniendo un mensaje de error previo | Limpiar el mensaje de error automáticamente al escribir          | El mensaje de error desaparece al detectar el evento `input` | Sí             |

## Por que disene asi mi clase

Diseñé la clase `Tarea` con los atributos `texto` (para el contenido) y `completada` (un booleano para el estado) porque representan los datos esenciales de cualquier pendiente. Le agregué el método `toggleEstado()` para invertir de forma limpia su estado sin manipular variables globales fuera del objeto.
