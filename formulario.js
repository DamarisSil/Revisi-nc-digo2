var formulario = document.querySelector(".formulario"); // Corregí el selector

formulario.onsubmit = function(e) {
  e.preventDefault(); // Corregí el método prevent()

  var n = formulario.elements[0];
  var edad = formulario.elements[1]; // Cambié el nombre de la variable "e" a "edad"
  var na = formulario.elements[2];

  var nombre = n.value;
  var edadValue = edad.value; // Cambié el nombre de la variable "e" a "edad"

  var indice = na.selectedIndex;
  var nacionalidad = na.options[indice].value;

  console.log(nombre, edadValue);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edadValue < 18 || edadValue > 120) {
    edad.classList.add("error");
  }

  if (nombre.length > 0 && (edadValue > 18 && edadValue < 120)) {
    agregarInvitado(nombre, edadValue, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var listaDeInvitados = document.getElementById("lista-de-invitados"); // Cambié el nombre de la variable "lista" a "listaDeInvitados"

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Corregí el método add

  listaDeInvitados.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var span = document.createElement("span"); // Cambié el nombre de la variable "spanNombre" a "span"
    var input = document.createElement("input"); // Cambié el nombre de la variable "inputNombre" a "input"
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar"); // Agregué una clase en lugar de un ID
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}
