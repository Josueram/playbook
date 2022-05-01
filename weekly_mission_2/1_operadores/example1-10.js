// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, 
// si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names = ["Juan", "Pedro", "Ana", "Maria"];
const areAllString = names.every(name => typeof name === "string"); // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllString);