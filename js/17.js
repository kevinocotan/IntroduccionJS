const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const numeros = [10, 20, 30]

// //Filter

// const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')

// console.log(nuevoArray)

// // Includes 

// const resultado = tecnologias.includes('CSS')

// Some  - Devuelve si al menos uno cumple la condición

const resultado = numeros.some (numero => numero > 15)
if (resultado){
    console.log('Si hay elementos')
} else {
    console.log('No hay elementos')
}
