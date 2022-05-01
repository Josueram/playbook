const user = {
  name: "Josué",
  username: "Josueram",
  email: "josueramirez0110@gmail.com",
  birthdayDate: "2001-11-10",
  biography: "I'm a software developer",
  numFollowing: 100,
  numFollower: 100,

  getUserInfo: function() {
    return `@${this.username} has ${this.numFollowing} following and ${this.numFollower} followers`;
  }
}

console.log("The account owner is: " + user.name);
console.log("The user " + user.getUserInfo());
console.log("The user's email is: " + user.email);
console.log("The user's birthday is: " + user.birthdayDate);
console.log("The user's biography is: " + user.biography);