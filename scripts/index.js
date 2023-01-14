let nombre = "Restaurante Aguilar";
console.log (nombre);

const edad = 10;
console.log = (edad);

let verdadero = true;
console.log = (verdadero);
let falso = false;
console.log = (falso);

let indefinido = undefined;
console.log = (indefinido);

let nulo = null
console.log = (nulo);

let nombreUsuario = prompt("Hola!, ¿cómo te llamas?");
alert("Hola " + nombreUsuario + " " + "¿cómo estás?");

let edadUsuario = parseInt(prompt("¿cuantos años tienes?"));
alert(`Hola, ${nombreUsuario} tienes ${edadUsuario} años`);

let visitasUsuario = parseInt(prompt("¿Cuantas veces nos has visitado?"));
if (visitasUsuario <=3) { 
    alert("Gracias por visitarnos. te otorgamos un descuento de $50 con el código 1111");
} else { 
    alert("Gracias por tu preferencia. te otorgamos un descuento de $100 con el código 2222")
}

let dia = 12;
const suma= dia+visitasUsuario;
alert("Tu numero de la suerte es el " + suma);

