class Post {
  constructor(author, date, content, numberLikes, numberComments, numberShares) {
    this.author = author;
    this.date = date;
    this.content = content;
    this.numberLikes = numberLikes;
    this.numberComments = numberComments;
    this.numberShares = numberShares;
  }

  get getAuthor() {
    return this.author;
  }
  set setAuthor(author) {
    this.author = author;
  }

  get getDate() {
    return this.date;
  }
  set setDate(date) {
    this.data = date;
  }

  get getContent() {
    return this.content;
  }
  set setContent(content) {
    this.content = content;
  }

  get getNumberLikes() {
    return this.numberLikes;
  }
  set setNumberLikes(numberLikes) {
    this.numberLikes = numberLikes;
  }

  get getNumberComments() {
    return this.numberComments;
  }
  set setNumberComments(numberComments) {
    this.numberComments = numberComments;
  }

  get getNumberShares() {
    return this.numberShares;
  }
  set setNumberShares(numberShares) {
    this.numberShares = numberShares;
  }
}

const post = new Post("Josue", "2022-05-01", "This is a post", 20, 3, 5);
console.log(post);