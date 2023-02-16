
/*
const contenidoCarrito = document.getElementById("contenidoCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");

const camisetas = [
    { id: 1, nombre: "Selección Mexicana", imagen:"./img/Mex1.jpg", precio: 1500, Cantidad: 1},
{ id: 2, nombre: "America", imagen:"./img/Mex1.jpg", precio: 1400, Cantidad: 1 },
{ id: 3, nombre: "Chivas", imagen:"./img/Mex1.jpg", precio: 1300, Cantidad: 1 },
{ id: 4, nombre: "Puebla", imagen:"./img/Mex1.jpg", precio: 1200, Cantidad: 1 },
{ id: 5, nombre: "Selección Española", imagen:"./img/Mex1.jpg", precio: 1500, Cantidad: 1 },
{ id: 6, nombre: "Real Madrid", imagen:"./img/Mex1.jpg", precio: 1400, Cantidad: 1 },
{ id: 7, nombre: "Barcelona", imagen:"./img/Mex1.jpg", precio: 1300, Cantidad: 1 },
{ id: 8, nombre: "Deportivo la Coruña", imagen:"./img/Mex1.jpg", precio: 1200, Cantidad: 1 },
{ id: 9, nombre: "Selección Italiana", imagen:"./img/Mex1.jpg", precio: 1500, Cantidad: 1 },
{ id: 10, nombre: "Juventus", imagen:"./img/Mex1.jpg", precio: 1400, Cantidad: 1 },
{ id: 11, nombre: "Napoli", imagen:"./img/Mex1.jpg", precio: 1300, Cantidad: 1 },
{ id: 12, nombre: "Milán", imagen:"./img/Mex1.jpg", precio: 1200, Cantidad: 1 },
]

const carrito =[]


const agregarAlCarrito = (id, carrito) => {
    const productoElegido = camisetas.find(item => item.id === id);
    carrito.push(productoElegido);
    console.log("El producto se agregó con exito", carrito);
}


const agregarContadorCarrito = () => {
    if (carrito.length !== 0) {
        contadorCarrito.classList.add("contadorCarrito");
        contadorCarrito.textContent = carrito.lenght
    }
}


comidas.forEach(item => {
    const div = document.createElement(div);
    div.innerHTML =
    `
    <div class= “card” style:”width: 18rem;”>  
    <img src=”${item.imagen}” class=”card-img-top” alt=”${item.nombre}”>
    <div class=”card-body”>
    <h3 class=”card-title”>${item.nombre}</h3>
    <p>Precio: $ ${item.precio}</p> 
    <button class=”btn btn-primary” id=”camiseta${item.id}”>Agregar</>
    </div>
    </div>
    `
        contenedorProductos.appendChild(div);
        const botonAgregarCarrito = document.getElementById(`agregarCarrito${comida.id}`);
        botonAgregarCarrito.addEventListener("click", () => {
            agregarAlCarrito(camisetas.id, carrito);
            agregarContadorCarrito();
            actualizarCarrito();
        })
    }
    
const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    carrito.forEach(camisetas => {
        const div = document.createElement("div");
        div.classList.add("productosenCarrito");
      div.classList.add("productosEnCarrito")
        div.innerHTML =
            `
<P>${comida.cantidad}</p>
<P>${comida.nombre}</p>
<P>Precio: $${comida.precio}</p>
<button>Eliminar</button>
`
        contenidoCarrito, appendChild(div);
    })
}
*/

console.log(document);
const contadorCarrito = document.getElementById("contadorCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");

/*array de productos*/

const comidas = [
    { id: 1, nombre: "Tacos al pastor", precio: 400, img: "../img/cemitas7.jpg", pais: "mex", cantidad: 1 },
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
    botonAgregarCarrito.addEventListener("click", () => {
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




/////////////////////////////////////
const botonAPI = document.getElementById("botonAPI”); 
const ContenedorProductosNuevos = document.getElementById("ContenedorProductosNuevos”); 

botonAPI.addEventListener("click", ()=>,{
    llamarAPI();
})

const llamarAPI = () => {
    fetch("productos.json")
        .then(informacion => informacion.json())
        .then(productos => productos.forEach(producto => {
            ContenedorProductosNuevos.innerHTML +=
                `
<div class= "card" style:"width: 18rem;">  
<img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
<div class="card-body">
<h3 class="card-title">${item.nombre}</h3>
<p>Precio: $ ${item.precio}</p> 
</div>
</div>
`
        }))
contenedorProductos.classList.add("grid”);
}
