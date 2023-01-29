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

let edadUsuario = parseInt(prompt("¿cuantos años tienes?"));
alert(`Hola, ${nombreUsuario} tienes ${edadUsuario} años`);

let edad = "30"

switch (edad) {
    case "25":
        console.log(" Restaurante Aguilar te da el 10% de descuento en tu siguiente salida al cine ")
        break;
    case "20":
            console.log(" Restaurante Aguilar te da el 50% de descuento en tu siguiente salida al cine ")
            break;
    case "18":
            console.log(" Restaurante Aguilar te regala una entrada para ir al cine ")
                break;
    default:
        console.log("Suerte para la proxima")
        break;
}

Comidas.forEach (comida => {
    Cosole.log (comida.nombre, comida.precio)
    });

    
Const ComidasFiltrado = comidas.filter (item => item.precio > 200);
    Console.log (“Comidas más caras”, comidasFiltrado);
    
Const ComidasFiltrado = comidas.filter (item => item.precio < 200);
    Console.log (“Comidas más económicas”, comidasFiltrado);
    
Const FiltradoporNombre = comidas.filter (item => item.nombre.includes (“P”));
    Console.log (“Comidas que incluyen P son: ”, FiltradoporNombre);


    
Const comidaSeleccionada = comidas.find(e=> e.id === id);
    Console.log (“El producto elegido es: ”,comidaSeleccionada);
    
Const comidaSeleccionada = comidas.find(e=> e.nombre === id);
    Console.log (“El producto elegido es: ”,comidaSeleccionada);
    
Const comidaSeleccionada = comidas.find(e=> e.id === id);
    Console.log (“El producto elegido es: ”,comidaSeleccionada);
    
 Const comidaSeleccionada = comidas.find(e=> e.nombre === id);
    Console.log (“El producto elegido es: ”,comidaSeleccionada);
    

Const nombre = comidas.some (elemento=> elemento.nombre === “Sopa”);
    Console.log (“¿El producto existe?”, nombre);


 Const ordenAlfabetico = comidas.sort ((item1,item2)=> {
        If (item1.nombre === item2.nombre) {
        return 0
        } else if (item1.nombre < item2.nombre) {
        return -1;
        } else {
        return 1
        }
        });
        
    