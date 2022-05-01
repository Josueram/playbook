const biography = {
  name: "Josué",
  birthday: "2001/11/10",
  worksIn: "UAQ",
  studiesIn: "UAQ",
  city: "Querétaro",
  country: "México",
  relationship: "In a relationship",

  getBiography: function() {
    return `${this.name} is ${this.relationship}, work in ${this.worksIn} and studies in ${this.studiesIn}`;
  }
}

console.log(biography.getBiography());
console.log("Birthday: " + biography.birthday);
console.log("City: " + biography.city);
console.log("Country: " + biography.country);