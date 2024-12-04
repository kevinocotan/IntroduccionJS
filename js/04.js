/* Objetos */
/* Es una colección de propiedades. */

const producto = {
    nombre : "Tablet", // Propiedad es todo. "nombre" es key, y "Tablet" es value.
    precio : 300, // Las comas separan las propiedades.
    disponible : false
}

// console.log(producto)
// console.table(producto)
// console.log(typeof producto)

// console.log(producto.nombre) // Sintaxis de punto.


/* Destructuring */

// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

const {nombre, precio, disponible} = producto

console.log(nombre)
console.log(precio)
console.log(disponible) // Lo mismo pero resumido
