// Manipular elementos HTML con CSS

const heading = document.querySelector('.heading') // Retorna un elemento

const enlaces = document.querySelectorAll('.navegacion a') // Retorna todos

heading.textContent = 'Un nuevo heading...'
// heading.id = 'Un nuevo ID'

// heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'

console.log(enlaces)
// enlaces[0].textContent = 'Nuevo Enlace'

enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')