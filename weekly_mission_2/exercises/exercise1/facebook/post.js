const post = {
  author: "Josué",
  date: "2022-05-01",
  public: true,
  content: "I'm a software developer",
  numberLikes: 100,
  numberComments: 100,
  numberShares: 100,

  getPostInfo: function() {
    return `This post was created by ${this.author} on ${this.date}`;
  }
}

console.log(post.getPostInfo());
console.log("Is the post public? " + post.public);
console.log("Content: " + post.content);
console.log("Number of likes: " + post.numberLikes);
console.log("Number of comments: " + post.numberComments);
console.log("Number of shares: " + post.numberShares);