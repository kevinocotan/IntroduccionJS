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

const { nombre } = producto // Ambos bloques de codigo hacen lo mismo.
console.log(nombre)

const nombre = producto.nombre // Ambos bloques de codigo hacen lo mismo.
const precio = producto.precio
const disponible = producto.disponible
console.log(nombre)
console.log(precio)
console.log(disponible)