// Template Strings y Concatenación

const producto = "Tablet de 12 Pulgadas"
const precio = 400
const marca = "Orange"

// Ejemplo sencillo

console.log('El Producto es: ' + producto) // Esto es lo mismo

console.log(`El producto es: ${producto}`) //Que esto.

// Ejemplo normal

console.log(producto + " $" + precio + " Dolares, marca: " + marca)

console.log(`${producto} $${precio} Dolares, marca: ${marca}`) // La nueva forma de concatenar

