const profile = {
  name: 'Josué',
  stars: 4.8,
  travels: 100,
  gender: "Male",
  email: "josueramirez0110@gmail.com",
  phoneNumber: "4426001005",

  getProfileInfo: function() {
    return `${this.name} has ${this.stars} stars out of ${this.travels} travels`;
  }
}

console.log(profile.getProfileInfo());
console.log("His gender is " + profile.gender);
console.log("His email is " + profile.email);
console.log("His phone number is: " + profile.phoneNumber)