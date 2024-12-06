const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

/* 
 // Logical Or y Logical And

 // || OR - Al menos uno se cumple

 // && AND 
*/

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No puedes pagar");
}
