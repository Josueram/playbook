// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Ejemplo 7: Imprimir los meses en Inglés que incluyan la palabra 'ber'");
const filteredMonths = months.filter(mounth => mounth.includes("ber"));
console.log(filteredMonths);