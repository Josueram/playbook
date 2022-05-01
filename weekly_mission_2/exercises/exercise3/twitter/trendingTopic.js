class TrendingTopic {
  constructor(trendPosition, category, trendName, numTweets) {
    this.trendPosition = trendPosition;
    this.category = category;
    this.trendName = trendName;
    this.numTweets = numTweets;
  }

  get getTrendPosition() {
    return this.trendPosition;
  }
  set setTrendPosition(trendPosition) {
    this.trendPosition = trendPosition;
  }

  get getCategory() {
    return this.category;
  }
  set setCategory(category) {
    this.category = category;
  }

  get getTrendName() {
    return this.trendName;
  }
  set setTrendName(trendName) {
    this.trendName = trendName;
  }

  get getNumTweets() {
    return this.numTweets;
  }
  set setNumTweets(numTweets) {
    this.numTweets = numTweets;
  }
}

const trendingTopic = new TrendingTopic(1, "technology", "#LaunchX", 100000000);
console.log(trendingTopic);