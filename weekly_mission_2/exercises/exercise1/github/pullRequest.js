const pullRequest = {
  title: 'Rewrite the code',
  branchName: 'hotfix',
  dateCreated: '2022-05-01',
  status: 'open',
  repositoryNameAssociated: 'LaunchX',

  getStatus: function() {
    return `The status of the pull request is ${this.status}`;
  },

  getTitleAndAutor: function() {
    return `"${this.title}" was created by ${this.author}`;
  }
}

console.log("Name of associated repository: " + pullRequest.repositoryNameAssociated);
console.log("Status: " + pullRequest.getStatus());
console.log("Title and author: " + pullRequest.getTitleAndAutor());
console.log("Braind: " + pullRequest.branchName);