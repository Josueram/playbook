// Ejemplo 3: Instanciar un objeto con atributos
class Student {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
};

// Crear un objeto de la clase Student (esto se le llama instanciación)
const josueStudent = new Student("Josue", 20, ["A", "B", "C"]);
console.log("Ejemplo 3: Instanciar un objeto con atributos");
console.log(josueStudent); // Student {name: "Josue", age: 20, grade: Array(3)}
