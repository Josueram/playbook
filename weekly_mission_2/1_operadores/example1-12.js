// Ejemplo 12: Uso de find en una lista de objetos
const scores = [
  { name: "Juan", score: 80 },
  { name: "Pedro", score: 100 },
  { name: "Ana", score: 80 },
  { name: "Maria", score: 78 }
];

const scoreLessThan80 = scores.find(user => user.score > 80);
console.log("Ejemplo 12: Name score found: " + scoreLessThan80.name);