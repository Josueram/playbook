class PullRequest {
  constructor(title, branchName, dateCreated, status, repositoryNameAssociated) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
  }

  get getAuthor() {
    return this.author;
  }
  set setAuthor(author) {
    this.author = author;
  }

  get getBranchName() {
    return this.branchName;
  }
  set setBranchName(branchName) {
    this.branchName = branchName;
  }

  get getDateCreated() {
    return this.dateCreated;
  }
  set setDateCreated(dateCreated) {
    this.dateCreated = dateCreated;
  }

  get getStatus() {
    return this.status;
  }
  set setStatus(status) {
    this.status = status;
  }

  get getRepositoryNameAssociated() {
    return this.repositoryNameAssociated;
  }
  set setRepositoryNameAssociated(repositoryNameAssociated) {
    this.repositoryNameAssociated = repositoryNameAssociated;
  }
}

const pullRequest = new PullRequest("Rewrite the code", "hotfix", "2022-05-01", "open", "LaunchX");
console.log(pullRequest);