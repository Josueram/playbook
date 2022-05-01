// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: "Juan", age: 20 },
  { name: "Pedro", age: 30 },
  { name: "Ana", age: 25 },
  { name: "Maria", age: 40 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0
});

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad");
console.log(users); // sorted ascemding by age