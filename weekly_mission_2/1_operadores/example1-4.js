// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista");
const numberSquared = numbers.map(num => num * num);
console.log(`Lista original: ${numbers}`);
console.log(`Lista nueva: ${numberSquared}`);