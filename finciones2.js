const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");

/*array de productos*/

const comidas = [
    { id: 1, nombre: "Tacos al pastor", precio: 400, img: "../img/cemitas7.jpg", pais: "mex" , cantidad: 1 },
    { id: 2, nombre: "Asado (carne argentina)", precio: 700, img: "../imagenes/asado.jpg", pais: "arg", cantidad: 1 },
    { id: 3, nombre: "Nachos", precio: 120, img: "../imagenes/nachos.jpg", pais: "mex", cantidad: 1 },
    { id: 4, nombre: "Locro", precio: 400, img: "../imagenes/locro.jpg", pais: "arg", cantidad: 1 },
    { id: 5, nombre: "Pollo con mole", precio: 800, img: "../imagenes/Mole.jpg", pais: "mex", cantidad: 1 },
    { id: 6, nombre: "Cordero patagonico con papas", precio: 730, img: "../imagenes/cordero-patagonico.jpg", pais: "arg", cantidad: 1 },
    { id: 7, nombre: "Chiles en nogada", precio: 600, img: "../imagenes/chiles-nogada.jpg", pais: "mex", cantidad: 1 },    
    { id: 8, nombre: "Pastel de papa", precio: 460, img: "../imagenes/pastel-papa.jpg", pais: "arg", cantidad: 1 },
    { id: 9, nombre: "Pozole", precio: 750, img: "../imagenes/pozole.jpg", pais: "mex", cantidad: 1 },
    { id: 10, nombre: "Empanada Salteña", precio: 330, img: "../imagenes/empanada-saltena.jpg", pais: "arg", cantidad: 1 },
];

/*Array de carrito de compras*/
const carrito = []

/*Función agregar al carrito*/
const agregarAlCarrito = (id, carrito) => {
    const productoSeleccionado = comidas.find(item => item.id === id);
    carrito.push(producto);
    console.log("El producto se agregó con exito", carrito);
}

/*Contador de carrito*/
const agregarContadorCarrito = () => {
    if (carrito.length !== 0) {
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent = carrito.lenght
    }
}


/*Productos en DOM*/

comidas.forEach(comida => {
    const div = document.createElement("div");
    div.innerHTML =
        `
    <div>
    <button class="button" id="Añadir${comida.id}">hola mundo</button>
    </div>
    `
    contenedorProductos.appendChild(div);
    const botonAgregarCarrito = document.getElementById(`agregarCarrito${comida.id}`);
    botonAgregarCarrito.addEventListener("click" , () =>{
        agregarAlCarrito(comidas.id, carrito);
        agregarContadorCarrito();
        actualizarCarrito();
    })
})

const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    carrito.forEach(comida => {
        const div = document.createElement("div");
        div.classList.add("productosenCarrito");
        div.innerHTML =
            `
<P>${comida.cantidad}</p>
<P>${comida.nombre}</p>
<P>Precio: $${comida.precio}</p>
`
        contenidoCarrito, appendChild(div);
    })
}

/*RECUPERAR DATOS*/

Document.querySelector("form")
   .addEventListener("Enviar datos" , e => {
   e.preventDefault()
   const data = Object.fromEntries (
   new FormData(e.target)
   )
   alert(JSON.stringify(data))
   })
