class User {
  constructor(name, country, city, school, gender, birthday, biography, numberFriends) {
    this.name = name;
    this.country = country;
    this.city = city;
    this.school = school;
    this.gender = gender;
    this.birthday = birthday;
    this.biography = biography;
    this.numberFriends = numberFriends;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getCountry() {
    return this.country;
  }
  set setCountry(country) {
    this.country = country;
  }

  get getCity() {
    return this.city;
  }
  set setCity(city) {
    this.city = city;
  }

  get getSchool() {
    return this.school;
  }
  set setSchool(school) {
    this.school = school;
  }

  get getGender() {
    return this.gender;
  }
  set setGender(gender) {
    this.gender = gender;
  }

  get getBirthday() {
    return this.birthday;
  }
  set setBirthday(birthday) {
    this.birthday = birthday;
  }

  get getBiography() {
    return this.biography;
  }
  set setBiography(biography) {
    this.biography = biography;
  }

  get getNumberFriends() {
    return this.numberFriends;
  }
  set setNumberFriends(numberFriends) {
    this.numberFriends = numberFriends;
  }
}

const user = new User("Josue", "México", "Querétaro", "UAQ", "Hombre", "2001-11-10", "I'm a software developer", 196);
console.log(user);