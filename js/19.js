const numero1 = 20
const numero2 = "20"

/* 
    = (Comparador no estricto)
    == (Comparador estricto)
*/

if (numero1 === numero2) { // Es recomendado siempre comparar con el triple.
    console.log("Si, son iguales"); // Solo revisa el valor
  } else {
    console.log("No, no son iguales"); // Revisa el valor y el tipo de dato.
  }