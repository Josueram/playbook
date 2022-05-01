const trendingTopic = {
  trendPosition: 1,
  category: 'technology',
  trendName: '#LaunchX',
  numTweets: 100000000,

  getTrenTopicInfo: function() {
    return `${this.trendName} is the number ${this.trendPosition} trending topic in the ${this.category} category`;
  }
}

console.log(trendingTopic.getTrenTopicInfo());
console.log("This topic has: " + trendingTopic.numTweets + " tweets");