//1. Introducción a JavaScript
//Ejercicio 2
let a = 5;
let b = 15;
let c = a + b;

console.log("La suma de a y b es igual a: " + c);

//Ejercicio 3
let userName = prompt("Ingrese su nombre: ");
console.log("Hola, " + userName + "!");

//2. Operadores lógicos y condicionales

//Ejercicio 1
let d = 150;
let e = 150;
let f = 15;

 d > e ? console.log("El numero " + d + " es el mayor") :
 d < e ? console.log("El numero "+e+" es el mayor"):
 console.log("Los numeros son iguales");

//Ejercicio 2 
let numero = prompt("Ingrese un numero: ");

numero % 2 == 0 ? console.log("El numero"+numero+" es par"):
console.log("El numero "+numero+" es impar");

//3. Operadores de asignación y bucles
//Ejercicio 1
let decremento = 10;

while(decremento>0){
  console.log(decremento);
  decremento--;
}

//Ejercicio 2
let valor = prompt("Ingrese un numero mayor a 100: ");

if (valor<100) {
  do{
    valor = prompt("Ingrese un numero mayor a 100: ");
  } while(valor<100)
}

console.log("Ingresaste un numero mayor a 100: "+valor)

//4. Funciones de JavaScript
//Ejercicio 1

function esPar(num) {
  if(num % 2 == 0){
    return true;
  }else{
    return false;
  }
}

let paridad = prompt("Ingrese el numero a evaluar paridad: ");
console.log("El numero "+paridad+" es par: "+esPar(paridad));

//Ejercicio 2
function convertirCelsiusAFahrenheit(celsius){
  let fahrenheit = celsius *1.8 + 32;
  console.log(celsius+" C son equivalentes a "+fahrenheit+" F")
}

let grados = prompt("Ingrese el valor que desea convertir a Fahrenheit: ")
convertirCelsiusAFahrenheit(grados);

//5. Objetos en JavaScript
//Ejercicio 1

let persona = {
  nombre: "Julieta",
  edad: 21,
  ciudad: "San Juan",
  setCiudad: function (nuevaCiudad){
    this.ciudad = nuevaCiudad
  }
}

console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad);
persona.setCiudad("Mendoza");
console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad);

//Ejercicio 2
let libro = {
  titulo: "El Diario de Ana Frank",
  autor: "Ana Frank",
  año: 1947,
  esMayorA10: function(){
    let añoActual = new Date().getFullYear();
    if((this.año + 10) < añoActual){
      return true
    }else{
      return false
    }
  }
}
 console.log("El libro " +libro.titulo+" es antiguo: "+libro.esMayorA10());

 //6. Arrays
 //Ejercicio 1

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nuevoArray = arrayNumeros.map((elemento) =>{
  return elemento*2;
})

console.log("Arreglo original: "+arrayNumeros);
console.log("Nuevo arreglo: "+nuevoArray);

//Ejercicio 2
let pares = [];

for(let i=1; i<=10; i++){
  let par = i * 2;
  pares.push(par);
}

console.log("Primeros numero pares: "+pares);

//7. Introducción al DOM
//Ejercicio 1

function cambiarColor() {
  let parrafos = document.querySelectorAll('p');

  parrafos.forEach(parrafo => {
    parrafo.style.color = 'blue';
  });
}

//Ejercicio 2
function mostrarAlerta() {
  let mensaje = document.getElementById('texto').value;

  alert("Has ingresado: " + mensaje);
}

//8. Eventos en DOM
//Ejercicio 1
let elementosLista = document.querySelectorAll('#miLista li');

elementosLista.forEach(function(elemento) {
  elemento.addEventListener('click', function() {

    console.log(elemento.textContent);
  });
});

//Ejercicio 2
function deshabilitarCampo() {
  let campoTexto = document.getElementById('campoTexto');
  campoTexto.disabled = true;
}

function habilitarCampo() {
  let campoTexto = document.getElementById('campoTexto');
  campoTexto.disabled = false;
}

//9. 
document.getElementById('formCorreo').addEventListener('submit', function(event) {
  event.preventDefault(); 
  let correo = document.getElementById('correo').value;

  localStorage.setItem('correo', correo);

  mostrarCorreoGuardado();
});

function mostrarCorreoGuardado() {
  let correoGuardado = localStorage.getItem('correo');
  let divCorreo = document.getElementById('correoGuardado');
  let botonEliminar = document.getElementById('eliminarCorreo');

  if (correoGuardado) {
    divCorreo.innerHTML = `<p>Correo guardado: ${correoGuardado}</p>`;
    botonEliminar.style.display = 'inline';
  } else {
    divCorreo.innerHTML = '';
    botonEliminar.style.display = 'none';
  }
}

document.getElementById('eliminarCorreo').addEventListener('click', function() {
  localStorage.removeItem('correo');
  
  mostrarCorreoGuardado();
});

window.onload = function() {
  mostrarCorreoGuardado();
}
