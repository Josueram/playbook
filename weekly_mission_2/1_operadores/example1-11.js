// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18];
const agesFind = ages.find(age => age < 20);
console.log("Ejemplo 11: Primer edad menor a 20 es: " + agesFind);