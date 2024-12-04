// Objetos - Destructuring de dos o más objetos.

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : "Juan",
    premium: true
}

const carrito ={
    cantidad : 1,
    ...producto //spread operator
}

console.log(carrito)