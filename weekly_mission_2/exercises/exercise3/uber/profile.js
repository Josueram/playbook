class Profile {
  constructor(name, stars, travels, gender, email, phoneNumber) {
    this.name = name;
    this.stars = stars;
    this.travels = travels;
    this. gender = gender;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getStars() {
    return this.stars;
  }
  set setStars(stars) {
    this.stars = stars;
  }

  get getTravels() {
    return this.travels;
  }
  set setTravels(travels) {
    this.travels = travels;
  }

  get getGender() {
    return this.gender;
  }
  set setGender(gender) {
    this.gender = gender;
  }

  get getEmail() {
    return this.email;
  }
  set setEmail(email) {
    this.email = email;
  }

  get getPhoneNumber() {
    return this.phoneNumber;
  }
  set setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
}

const profile = new Profile("Josué", 4.8, 100, "Male", "josueramirez0110@gmail.com", "4426001005");
console.log(profile);