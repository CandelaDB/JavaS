//bienvenida
alert("¡Bienvenido/a AURA!");
class saludar {
    constructor (usuario) {
        this. usuario = usuario;
    }
    saludarlo() {
        return `Hola ${this.usuario} ya podes elegir tu suervicio en AURA!`;
    }
}
//Array de servicios
let servicios = [{
    tipo: "Corte de pelo",
    precio: 900,
    lugares: 10,
} , {
    tipo: "Lavado de cabeza",
    precio: 500,
    lugares: 20, 
} ,{
    tipo: "Tintura de pelo",
    precio: 1500,
    lugares: 5,
} , {
    tipo: "Peinado",
    precio: 1000,
    lugares: 10,
}
]
//Funciones
function agregarAlcarrito() {
    seleccionservicio = parseInt(prompt(`Elegir el numero de servicio \n 1- ${CORTE} \n 2- ${LAVADO} \n 3- ${TINTURA} \n 4- ${PEINADO}`));
    switch(seleccionservicio) {
        case 1:
            alert (`Seleccionaste ${CORTE} para realizarte.`);
            carrito.push(servicios[0]);
            break;
        case 2:
            alert (`Seleccionaste ${LAVADO} para realizarte.`);
            carrito.push(servicios[1]);
            break;
        case 3:
            alert (`Seleccionaste ${TINTURA} para realizarte.`);
            carrito.push(servicios[2]);
            break;
        case 4:
            alert (`Seleccionaste ${PEINADO} para realizarte.`);
            carrito.push(servicios[3]);
            break;      
    }
    opcion = parseInt(prompt(`Ingrese la opcion \n 2-Finalizar compra \n 3-Salir \n 4- Agregar otro servicio`));
}
function finalizarCompra() {
    const total = carrito.reduce((contadorPrecio, aniade) =>contadorPrecio + aniade.precio, 0);
    alert(`Gracias por elegir su servicio, el total a pagar es de $${total*impuesto} mas impuestos.`);
}
function verCarrito(){
    carrito.forEach (function(carrito){ 
        console.log(`Elegiste la opcion de ${carrito.tipo} que tiene un precio de ${carrito.precio*impuesto}`);
       // alert (`${carrito}`)
    })
    const total = carrito.reduce ((contadorPrecio, aniade) =>contadorPrecio + aniade.precio, 0);
    console.log(`El precio final del servicio es de ${total*impuesto} con impuestos.`);
}
//carrito
carrito = [];
let CORTE, LAVADO, TINTURA, PEINADO, seleccionservicio, opcion, impuesto, preciocorte, preciolavado, preciotintura, preciopeinado;

CORTE = servicios[0].tipo;
LAVADO = servicios[1].tipo;
TINTURA = servicios[2].tipo;
PEINADO = servicios[3].tipo;
impuesto = 2.50
preciocorte = servicios[0].precio;
preciolavado = servicios[1].precio;
preciotintura = servicios[2].precio;
preciopeinado = servicios[3].precio;
//Funciones
//Saludos
let usuarioNuevo = new saludar(prompt("¿Cual es tu nombre?"));
alert(usuarioNuevo.saludarlo());

//opciones
opcion - parseInt(prompt(`Elija una opcion \n 1-Reservar servicio \n 2-Finalizar la reserva \n 3-Salir` ));
alert (`El precio de los servicios es \n 1- ${CORTE}: $${preciocorte} \n 2-${LAVADO}: $${preciolavado} \n 3-${TINTURA}: $${preciotintura} \n 4-${PEINADO}: $${preciopeinado}`);
while (opcion !==3) {
    if(opcion ===1) {
        agregarAlcarrito();
    }
    if (opcion === 4){
        agregarAlcarrito();
    }
    if (opcion === 2) {
        finalizarCompra();
        opcion = 3;
        verCarrito()
    }
}

alert("¡Gracias por reservar tu turno en AURA, te esperamos pronto! ");
