
let nombreUsuario = prompt("Hola!, ¿cómo te llamas?");
alert("Hola " + nombreUsuario + " " + "¿cómo estás?");

let edadUsuario = parseInt(prompt("¿cuantos años tienes?"));
alert(`Hola, ${nombreUsuario} tienes ${edadUsuario} años`);

let visitasUsuario = parseInt(prompt("¿Cuantas veces nos has visitado?"));
if (visitasUsuario <= 3) {
    alert("Gracias por visitarnos.");
}

let dia = 12;
const suma = dia + visitasUsuario;
alert("Tu numero de la suerte es el " + suma);
////////////////////////////////////////
/*
const contenedorProductos = document.getElementById("contenedorProductos");
const contenidoCarrito = document.getElementById("contenidoCarrito");

const carrito = [];
*/

const camisetas = [
    { id: 1, nombre: "Selección Mexicana", imagen: "../img/Mex1.jpg", precio: 1500, Cantidad: 1 },
    { id: 2, nombre: "America", imagen: "../img/Mex2.jpg", precio: 1400, Cantidad: 1 },
    { id: 3, nombre: "Chivas", imagen: "../img/Mex3.jpg", precio: 1300, Cantidad: 1 },
    { id: 4, nombre: "Puebla", imagen: "../img/Mex4.jpg", precio: 1200, Cantidad: 1 },
    { id: 5, nombre: "Selección Española", imagen: "../img/Esp1.jpg", precio: 1500, Cantidad: 1 },
    { id: 6, nombre: "Real Madrid", imagen: "../img/Esp2.jpg", precio: 1400, Cantidad: 1 },
    { id: 7, nombre: "Barcelona", imagen: "../img/Esp3.jpg", precio: 1300, Cantidad: 1 },
    { id: 8, nombre: "Deportivo la Coruña", imagen: "../img/Esp4.jpg", precio: 1200, Cantidad: 1 },
    { id: 9, nombre: "Selección Italiana", imagen: "../img/It1.jpg", precio: 1500, Cantidad: 1 },
    { id: 10, nombre: "Juventus", imagen: "../img/It2.jpg", precio: 1400, Cantidad: 1 },
    { id: 11, nombre: "Napoli", imagen: "../img/It3.jpg", precio: 1300, Cantidad: 1 },
    { id: 12, nombre: "Milán", imagen: "../img/It4.jpg", precio: 1200, Cantidad: 1 },
]

camisetas.forEach(item => {
    contenedorProductos.innerHTML +=
        `
    <div class= "card" style:"width: 18rem;">  
<img src="${item.imagen}" class="imgxd" alt="${item.nombre}">
<div class="card-body">
<h3 class="card-title">${item.nombre}</h3>
<p>Precio: $ ${item.precio}</p> 
<button class="button" id="camiseta${item.id}">Agregar</>
</div>
    </div>
    `
})
/*
const agregarAlCarrito = (ProductoSeleccionado, carrito) => {
    const ProductoSeleccionado = camisetas.find (camisetas => camiseta.id === ProductoSeleccionado)
    carrito.push (ProductoSeleccionado)
    console.log ("se agrego con exito", carrito)
}

const botonAgregarCarrito = document.getElementById ( ) ( `camisetas${item.id}`)
 botonAgregarCarrito.addEventListener("click", () => {
    agregarAlCarrito(item.id, carrito)
 }
 )

const agregarContadorCarrito = () => {
    if (carrito.length !== 0) {
       contadorCarrito.classList.add("contadorCarrito");
       contadorCarrito.textContent = carrito.lenght
       }
    }

  const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    carrito.forEach(comida => {
        const div = document.createElement("div");
        div.classList.add("productosenCarrito");
        div.innerHTML =
            `
<P>${camisetas.cantidad}</p>
<P>${camisetas.nombre}</p>
<P>Precio: $${camisetas.precio}</p>
`
        contenidoCarrito, appendChild(div);
    })
}  
 /* 
/////////////////////////////////////////
/*
const camisetasFiltrado = camisetas.filter (item => item.precio > 1400);
Console.log ("camisetas más caras", camisetasFiltrado);

const camisetasFiltrado = comidas.filter (item => item.precio < 1300);
Console.log ("camisetas más económicas", camisetasFiltrado);



const ordenAlfabetico = camisetas.sort ((item1,item2)=> {
If (item1.nombre === item2.nombre) {
return 0
} else if (item1.nombre < item2.nombre) {
return -1;
} else {
return 1
}
});
*/
///////////////////////////////////////////////////////////////////
const botonAPI = document.getElementById("botonAPI");
const ContenedorProductosNuevos = document.getElementById("ContenedorProductosNuevos");

botonAPI.addEventListener("click", () => {
    llamarAPI();
})

const llamarAPI = () => {
    fetch("productos.json")
        .then(informacion => informacion.json())
        .then(productos => productos.forEach(productos => {
            ContenedorProductosNuevos.innerHTML +=
                ` 
            <div class= "card" style:"width: 18rem;">  
            <img src="${item.imagen}" class="imgxd" alt="${item.nombre}">
            <div class="card-body">
            <h3 class="card-title">${item.nombre}</h3>
            </div>
                </div>
                `
        }))
}
/////////////////////////////////////
Document.querySelector("form")
    .addEventListener("Enviar datos", e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        alert(JSON.stringify(data))
    })
