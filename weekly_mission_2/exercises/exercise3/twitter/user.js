class User {
  constructor(name, username, email, birthdayDate, biography, numFollowing, numFollower) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.birthdayDate = birthdayDate;
    this.biography = biography;
    this.numFollowing = numFollowing;
    this.numFollower = numFollower;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getUsername() {
    return this.username;
  }
  set setUsername(username) {
    this.username = username;
  }

  get getEmail() {
    return this.email;
  }
  set setEmail(email) {
    this.email = email;
  }

  get getBirthdayDate() {
    return this.birthdayDate;
  }
  set setBirthdayDate(birthdayDate) {
    this.birthdayDate = birthdayDate;
  }

  get getBiography() {
    return this.biography;
  }
  set setBiography(biography) {
    this.biography = biography;
  }

  get getNumFollowing() {
    return this.numFollowing;
  }
  set setNumFollowing(numFollowing) {
    this.numFollowing = numFollowing;
  }

  get getNumFollower() {
    return this.numFollower;
  }
  set setNumFollower(numFollower) {
    this.numFollower = numFollower;
  }
}

const user = new User("Josué", "Josueram", "josueramirez0110@gmail.com", "2001-11-10", "I'm a software developer", 100, 100);
console.log(user);