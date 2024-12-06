// Condicionales

const auth = true;

if (auth) {
  // Se cumple la condicion
  console.log("Acceso al sistema...");
} else {
  // No se cumple la condicion
  console.log("No tienes permiso, inicia sesion.");
}

/* 
    > Mayor que
    < Menor que
    >= Mayor o igual
    <= Menor o igual
    == Igual
    === Igual estricto
    !== Diferente a
*/

const disponible = 4000;
const retirar = 400;

if (disponible > retirar) {
  // Se cumple la condicion
  console.log("Puedes retirar");
} else {
  // No se cumple la condicion
  console.log("Saldo insuficiente");
}
