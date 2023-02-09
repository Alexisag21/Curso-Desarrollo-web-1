const contadorCarrito = document.getElementById (“contadorCarrito”);
const contenidoCarrito = document.getElementById (“contenidoCarrito”);

/*array de productos*/
const comidas = [
{ id: 1 , nombre: “Mole poblano”, precio: 300},
{ id: 2, nombre: “Cemita”, precio: 150},
{ id: 3, nombre: “Molotes”, precio: 120},
{ id: 4, nombre: “Pizza”, precio: 180},
{ id: 5, nombre: “Chiles en nogada”, precio: 500},
{ id: 6, nombre: “Pozole”, precio:300},
{ id: 7, nombre: “Chalupas”, precio: 100},
{ id: 8, nombre: “Hamburguesa”, precio: 150},
];

/*Array de carrito de compras*/ 
Const carrito = [];

Función agregar al carrito
const agregarAlCarrito = (id, carrito) => {
     const productoSeleccionado = comidas.find  (item => item.id === id);
     carrito.push(producto);
     console.log(“El producto se agregó con exito”, carrito);
} 

/*Contador de carrito*/
const agregarContadorCarrito = () => {
if (carrito.length !== 0) {
   contadorCarrito.classList.add(“contadorCarrito”);
   contador.Carrito.textContent = carrito.lenght
   }
}

/*Productos en DOM*/

Comidas.forEach(comida => {
     const div = document.createElement(“div”);
    div.innerHTML =

contenedorProductos.appendChild(div);
const botonAgregarCarrito = document.getElementById(`agregarCarrito${comida.id}`);
botonAgregarCarrito.addEventListener (“click”, ()=> {
    agregarAlCarrito(comida.id, carrito); 
   agregarContadorCarrito();
    actualizarCarrito();
    })
})

const actualizarCarrito =  () => {
    ContenidoCarrito.innerHTML = “”;
    carrito.forEach (comida => {  
    const div = document.createElement(“div”);
    div.classList.add (“productosEnCarrito”)
   div.innerHTML =
 `
<P>${comida.cantidad}</p>
<P>${comida.nombre}</p>
<P>Precio: $${comida.precio}</p>
`
   contenidoCarrito,appendChild(div);
     })
} 




    
    /*Recuperar datos de formulario*/

.Document.querySelector(“form”)
.addEventListener(“submit” , e => {
e.preventDefault()
const data = Object.fromEntries (
new FormData(e.target)
)
alert(JSON.stringify(data))
})