// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, 
// y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

const bools = [true, true, false, true]
// Uso de some para ver si algun elemento de la lista es falso
const areSomeTrue = bools.some(bool => bool === false);
console.log("Ejemplo 14: Alguno de los elementos en el Array es false? " + areSomeTrue); // true
