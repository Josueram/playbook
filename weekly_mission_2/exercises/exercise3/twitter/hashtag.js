class Hashtag {
  constructor(title, datePublicaction, numberOfTweets, description) {
    this.title = title;
    this.datePublicaction = datePublicaction;
    this.numberOfTweets = numberOfTweets;
    this.description = description;
  }

  get getTitle() {
    return this.title;
  }
  set setTitle(title) {
    this.title = title;
  }

  get getDatePublicaction() {
    return this.datePublicaction;
  }
  set setDatePublicaction(datePublicaction) {
    this.datePublicaction = datePublicaction;
  }

  get getNumberOfTweets() {
    return this.numberOfTweets;
  }
  set setNumberOfTweets(numberOfTweets) {
    this.numberOfTweets = numberOfTweets;
  }

  get getDescription() {
    return this.description;
  }
  set setDescription(description) {
    this.description = description;
  }
}

const hashtag = new Hashtag("#Launchx", "2022-05-01", "20000", "This is a hashtag for the LaunchX repository");
console.log(hashtag);