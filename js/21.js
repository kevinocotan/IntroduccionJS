// Ternarios

const auth = true;

const saldo = 1000;
const pagar = 500;
const tarjeta = true;

// if (auth) {
//   // Se cumple la condicion
//   console.log("Usuario autenticado");
// } else {
//   // No se cumple la condicion
//   console.log("No tienes permiso, inicia sesion.");
// }

/* TERNARIO NORMAL */

// auth
//   ? console.log("Usuario autenticado")
//   : console.log("No tienes permiso, inicia sesion."); // ESTO Y LO DE ARRIBA ES LO MISMO.

/* TERNARIO CON LOGICAL */

// saldo > pagar
//   ? console.log("Si puedes pagar")
//   : console.log("No, no puedes pagar");

/* TERNARIO ANIDADO */

saldo > pagar || tarjeta
  ? console.log("Si puedes pagar")
  : console.log("No, no puedes pagar");
