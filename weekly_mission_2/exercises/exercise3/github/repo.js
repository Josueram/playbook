class Repo {
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getAuthor() {
    return this.author;
  }
  set setAuthor(author) {
    this.author = author;
  }

  get getLanguage() {
    return this.language;
  }
  set setLanguage(language) {
    this.language = language;
  }

  get getNumberOfCommits() {
    return this.numberOfCommits;
  }
  set setNumberOfCommits(numberOfCommits) {
    this.numberOfCommits = numberOfCommits;
  }

  get getStars() {
    return this.stars;
  }
  set setStars(stars) {
    this.stars = stars;
  }

  get getForks() {
    return this.forks;
  }
  set setForks(forks) {
    this.forks = forks;
  }

  get getIssues_open() {
    return this.issues_open;
  }
  set setIssues_open(issues_open) {
    this.issues_open = issues_open;
  }

  get getIssues_close() {
    return this.issues_close;
  }
  set setIssues_close(issues_close) {
    this.issues_close = issues_close;
  }
}

const repo = new Repo("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10);
console.log(repo);