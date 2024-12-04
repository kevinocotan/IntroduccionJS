// Objetos - Manipulación

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

// Object.freeze(producto) // Sobre el objeto que se esta aplicando, no va a dejar modificarlo. Quiere decir que todo lo que hago aca abajo, no se modifica.
Object.seal(producto) // Permite modificar las existentes, pero no permite añadir.

// Reescribir un valor
producto.disponible = true

// Si no existe, lo va añadir.
producto.imagen = 'imagen.jpg'

// Elimiar propiedad.
delete producto.precio

console.log(producto)