
const contenedorProductos = document.getElementById("contenedorProductos");

const camisetas = [
    { id: 1, nombre: "Selección Mexicana", imagen:"../img/Mex1.jpg", precio: 1500, Cantidad: 1},
{ id: 2, nombre: "America", imagen:"../img/Mex2.jpg", precio: 1400, Cantidad: 1 },
{ id: 3, nombre: "Chivas", imagen:"../img/Mex3.jpg", precio: 1300, Cantidad: 1 },
{ id: 4, nombre: "Puebla", imagen:"../img/Mex4.jpg", precio: 1200, Cantidad: 1 },
{ id: 5, nombre: "Selección Española", imagen:"../img/Esp1.jpg", precio: 1500, Cantidad: 1 },
{ id: 6, nombre: "Real Madrid", imagen:"../img/Esp2.jpg", precio: 1400, Cantidad: 1 },
{ id: 7, nombre: "Barcelona", imagen:"../img/Esp3.jpg", precio: 1300, Cantidad: 1 },
{ id: 8, nombre: "Deportivo la Coruña", imagen:"../img/Esp4.jpg", precio: 1200, Cantidad: 1 },
{ id: 9, nombre: "Selección Italiana", imagen:"../img/It1.jpg", precio: 1500, Cantidad: 1 },
{ id: 10, nombre: "Juventus", imagen:"../img/It2.jpg", precio: 1400, Cantidad: 1 },
{ id: 11, nombre: "Napoli", imagen:"../img/It3.jpg", precio: 1300, Cantidad: 1 },
{ id: 12, nombre: "Milán", imagen:"../img/It4.jpg", precio: 1200, Cantidad: 1 },
]

camisetas.forEach (item => {
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

///////////////////////////////////////////////////////////////////
