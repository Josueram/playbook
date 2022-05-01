const hashtag = {
  title: "#Launchx",
  datePublicaction: "2022-04-01",
  numberOfTweets: 20000,
  description: "This is a hashtag for the LaunchX repository",

  getHashtagInfo: function() {
    return `The hashtag ${this.title} has ${this.numberOfTweets} tweets`;
  }
}

console.log("Hashtag title: " + hashtag.title);
console.log("Date of publication: " + hashtag.datePublicaction);
console.log(hashtag.getHashtagInfo());
console.log("Description: " + hashtag.description);