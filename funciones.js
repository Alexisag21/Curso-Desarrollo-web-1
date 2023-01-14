const saludar = () => console.log ("hola usuario");

saludar ();

function sumarParametros (usuario5, usuario3, usuario2) {
const resultado = usuario5 + usuario3 + usuario2;
console.log (resultado);
}

sumarParametros(5,3,2) 

function comparar (usuario5, usuario2) {

    if(usuario5>usuario2){
        console.log (" cliente muy satisfecho");  
    } else if (usuario1 === usuario2) {
        console.log ("Cliente satisfecho");
    } else {
        console.log ("Cliente insatisfecho");
    }
}

comparar (5, 2);

const carritodeCompras = [];

console.log (carritodeCompras); 

const Comida1 = {
    nombre: "mole poblano",
    precio:350,
    detalle: "el mejor mole de puebla",
 }

 const Comida2 = {
    nombre: "pizza",
    precio: 200,
    detalle: "te sentirás en italia"
 }

 const Comida3 = {
    nombre: "chiles en nogada",
    precio: 400,
    detalle: "Aprovecha nuestra promoción de 2x1"
 }

 const Comida4 = {
    nombre: "pozole",
    precio: 250,
    detalle:"el mejor pozole de puebla"
 }

 carritodeCompras.push(Comida1);
 console.log (carritodeCompras);

 carritodeCompras.push(Comida2);
 console.log (carritodeCompras);

 carritodeCompras.push(Comida3);
 console.log (carritodeCompras);

 carritodeCompras.push(Comida4);
 console.log (carritodeCompras);