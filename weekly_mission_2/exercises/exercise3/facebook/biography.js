class Biography {
  constructor(name, birthday, worksIn, studiesIn, city, country, relationship) {
    this.name = name;
    this.birthday = birthday;
    this.worksIn = worksIn;
    this.studiesIn = studiesIn;
    this.city = city;
    this.country = country;
    this.relationship = relationship;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getBirthday() {
    return this.birthday;
  }
  set setBirthday(birthday) {
    this.birthday = birthday;
  }

  get getWorksIn() {
    return this.worksIn;
  }
  set setWorksIn(worksIn) {
    this.worksIn = worksIn;
  }

  get getStudiesIn() {
    return this.studiesIn;
  }
  set setStudiesIn(studiesIn) {
    this.studiesIn = studiesIn;
  }

  get getCity() {
    return this.city;
  }
  set setCity(city) {
    this.city = city;
  }

  get getCountry() {
    return this.country;
  }
  set setCountry(country) {
    this.country = country;
  }

  get getRelationship() {
    return this.relationship;
  }
  set setRelationship(relationship) {
    this.relationship = relationship;
  }
}

const biography = new Biography("Josué", "2001-11-10", "UAQ", "UAQ FIF", "Querétaro", "México", "En una relación");
console.log(biography);