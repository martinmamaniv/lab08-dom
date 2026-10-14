// Clase para representar una tarea individual
class Tarea {
  constructor(texto) {
    this.texto = texto;
    this.completada = false;
  }

  toggleEstado() {
    this.completada = !this.completada;
  }

  descripcion() {
    return this.texto;
  }
}

// Clase para gestionar la lista de tareas
class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregar(tarea) {
    this.tareas.push(tarea);
  }

  eliminar(indice) {
    this.tareas.splice(indice, 1);
  }
}

// Instancia del gestor
const gestor = new GestorTareas();

// Elementos del DOM
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");

// Evento 1: input para limpiar mensaje de error mientras se escribe
inputTarea.addEventListener("input", () => {
  if (inputTarea.value.trim() !== "") {
    mensajeError.textContent = "";
  }
});

// Evento 2: submit para agregar nueva tarea con validación
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = inputTarea.value.trim();

  // Validación
  if (texto === "") {
    mensajeError.textContent =
      "Error: El texto de la tarea no puede estar vacío.";
    return;
  }

  mensajeError.textContent = "";
  const nuevaTarea = new Tarea(texto);
  gestor.agregar(nuevaTarea);

  renderizarTareas();
  formTarea.reset();
});

// Función para actualizar el DOM
function renderizarTareas() {
  listaTareas.innerHTML = "";

  gestor.tareas.forEach((tarea, indice) => {
    const li = document.createElement("li");
    if (tarea.completada) {
      li.classList.add("completada");
    }

    const span = document.createElement("span");
    span.textContent = tarea.descripcion();

    const contenedorAcciones = document.createElement("div");
    contenedorAcciones.classList.add("acciones");

    // Evento 3: click para alternar estado
    const btnEstado = document.createElement("button");
    btnEstado.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnEstado.classList.add("btn-completar");
    btnEstado.addEventListener("click", () => {
      tarea.toggleEstado();
      renderizarTareas();
    });

    // Evento para eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.addEventListener("click", () => {
      gestor.eliminar(indice);
      renderizarTareas();
    });

    contenedorAcciones.appendChild(btnEstado);
    contenedorAcciones.appendChild(btnEliminar);

    li.appendChild(span);
    li.appendChild(contenedorAcciones);
    listaTareas.appendChild(li);
  });
}
