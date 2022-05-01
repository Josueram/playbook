// Crear un objeto que reciba parámetros
const myObjetc5 = {
  name: "Josué",

  // Método
  sayHello: function (explorerName) {
    console.log(`Hola Explorer ${explorerName}, me llamo ${this.name}, saludos!`);
  }
};
console.log("Ejemplo 5: Crear un objeto que reciba parámetros");
myObjetc5.sayHello("Woopa");