// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names = ["Juan", "Pedro", "Ana", "Maria"];
const result = names.findIndex(name => name.length > 4);
console.log("Primer elemento cuya palabra sea mayor a 7 esta en la posición " + result);