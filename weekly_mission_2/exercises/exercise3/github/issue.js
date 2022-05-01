class Issue {
  constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }

  get getTitle() {
    return this.title;
  }
  set setTitle(title) {
    this.title = title;
  }

  get getRepositoryNameAssociated() {
    return this.repositoryNameAssociated;
  }
  set setRepositoryNameAssociated(repositoryNameAssociated) {
    this.repositoryNameAssociated = repositoryNameAssociated;
  }

  get getStatus() {
    return this.status;
  }
  set setStatus(status) {
    this.status = status;
  }

  get getNumberOfComments() {
    return this.numberOfComments;
  }
  set setNumberOfComments(numberOfComments) {
    this.numberOfComments = numberOfComments;
  }

  get getLabels() {
    return this.labels;
  }
  set setLabels(labels) {
    this.labels = labels;
  }

  get getAuthor() {
    return this.author;
  }
  set setAuthor(author) {
    this.author = author;
  }

  get getDataCreated() {
    return this.dateCreated;
  }
  set setDataCreated(dateCreated) {
    this.dateCreated = dateCreated;
  }

  get getLastUpdated() {
    return this.lastUpdated;
  }
  set setLastUpdated(lastUpdated) {
    this.lastUpdated = lastUpdated;
  }
}

const isuue = new Issue('Issue 1', 'LaunchX', 'open', '10', ['bug', 'enhancement'], 'Josué', '2022-05-01', '2022-05-02');
console.log(isuue);
