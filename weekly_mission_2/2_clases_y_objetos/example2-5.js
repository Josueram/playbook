// Ejemplo 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
  constructor(name, age, stack) {
    this.name = name;
    this.age = age;
    this.stack = stack;
    this.exercisesCompleted = 0;
    this.exercisesTodo = 99;
  };

  // podemos acceder a los atributos de esta clase usando getters
  get getExercisesCompleted() {
    return this.exercisesCompleted;
  };
};

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto");
const woopa = new Ajolonauta("Woopa", 1, []);
console.log(woopa.getExercisesCompleted);