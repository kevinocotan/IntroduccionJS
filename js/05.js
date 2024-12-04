// Objetos - Manipulación

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

// Reescribir un valor
producto.disponible = true

// Si no existe, lo va añadir.
producto.imagen = 'imagen.jpg'

// Elimiar propiedad.
delete producto.precio

console.log(producto)