const user = {
  name: "Josué",
  country: "México",
  city: "Querétaro",
  school: "UAQ",
  gender: "Hombre",
  birthday: "2001/11/10",
  biography: "I'm a software developer",
  numberFriends: 196,

  getBasicUserInfo: function() {
    return `${this.name} es de la ciudad de ${this.city} y tiene ${this.numberFriends} amigos`;
  }
}

console.log("The account owner is: " + user.name);
console.log("The user " + user.getBasicUserInfo());
console.log("The user's country is: " + user.country);
console.log("The user's school is: " + user.school);
console.log("His gender is: " + user.gender);
console.log("His birthday is: " + user.birthday);
console.log("His biography is: " + user.biography);