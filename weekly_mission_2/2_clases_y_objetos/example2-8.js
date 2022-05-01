// Herencia: Nos permite relacionar clases entre sí y rehusar sus componentes.
// Ejemplo 9: Herencia entre dos clases.
class Developer {
  constructor(name, mainLanguage, stack) {
    this.name = name;
    this.mainLanguage = mainLanguage;
    this.stack = stack;
  }

  get getName() {
    return this.name;
  }
}

console.log("Ejemplo 9: Herencia entre dos clases");
const josueDev = new Developer("Josue", "JavaScript", ["Node.js", "React.js"]);
console.log(josueDev);

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre.
class LaunchXStudent extends Developer {
}

const josueLaunchX = new LaunchXStudent("Josue", "Python", ["Pandas", "Django"]);
console.log(josueLaunchX);
console.log(josueLaunchX.getName); // getter de la clase padre rehusada en la clase hija