// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(title, author, language, starts) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.starts = starts;
  }
  // Método
  getInfo() { // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Repository: ${this.title} by ${this.author} in ${this.language} with ${this.starts} starts`;
  }
}

console.log("Ejemplo 4: Métodos en los objetos");
const myRepo = new Repository("LaunchX", "Josue", "JavaScript", 100);
console.log(myRepo.getInfo()); // Repository: LaunchX by Josue in JavaScript with 100 starts