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

const agregarAlCarrito = (producto, carrito) => {
    carrito.push(producto);
    consoile.log("se agregó con exito el producto");
}

const comidas = [
     {id 1, nombre: "mole poblano", precio:350},
     {id 2, nombre: "mole poblano", precio:350},
     {id 3, nombre: "chiles en nogada", precio: 400},
     {id 4, nombre: "pozole", precio: 250}
];

for (let i= 0; i < comidas.length; i++) {
    console.log ("Array completo. " , comidas[i]);
}

