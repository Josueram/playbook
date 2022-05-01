// Ejemplo 8: Filtrar una lista por condicional
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Jane", age: 27 },
  { name: "Mary", age: 18 },
  { name: "Peter", age: 35 },
];

const filteredPeople = people.filter(person => person.age > 25);
console.log(filteredPeople);