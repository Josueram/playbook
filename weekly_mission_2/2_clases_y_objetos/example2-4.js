// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo;
    this.title = title;
    this.lines_changed = lines_changed;
    this.status = "OPEN";
    this.dataCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
  }

  getInfo() {
    return `This RP is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dataCreated}`;
  }
}

console.log("Ejemplo 5: Atributos con valores por default");
const myRP1 = new PullRequest("LaunchX", "Mi primer RP", 100);
console.log(myRP1.getInfo()); 

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())
