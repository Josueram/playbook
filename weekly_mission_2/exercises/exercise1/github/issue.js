const issue = {
  title: "Request for a new feature",
  repositoryNameAssociated: "LaunchX",
  status: "open",
  numberOfComments: 0,
  labels: ["bug", "enhancement"],
  author: "Josué",
  dateCreated: "2022-04-01",
  lastUpdated: "2022-04-02",

  getTitleAndAuthor: function() {
    return `"${this.title}" was created by ${this.author}`;
  },

  getGeneralInfo: function() {
    return `This issue was created on ${this.dateCreated} and was last updated on ${this.lastUpdated}, 
    the status is ${this.status} and it has ${this.numberOfComments} comments.`;
  }
}

console.log("Name of associated repository: " + issue.repositoryNameAssociated);
console.log("Title and author: " + issue.getTitleAndAuthor());
console.log("General info: " + issue.getGeneralInfo());
console.log("Labels: " + issue.labels);