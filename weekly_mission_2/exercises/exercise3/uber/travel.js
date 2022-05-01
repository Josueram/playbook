class Travel {
  constructor(user, driver, car, origin, destination, timeTravel, payMethod, price) {
    this.user = user;
    this.driver = driver;
    this.car = car;
    this.origin = origin;
    this.destination = destination;
    this.timeTravel = timeTravel;
    this.payMethod = payMethod;
    this.price = price;
  }

  get getUser() {
    return this.user;
  }
  set setUser(user) {
    this.user = user;
  }

  get getDriver() {
    return this.driver;
  }
  set setDriver(driver) {
    this.driver = driver;
  }

  get getCar() {
    return this.car;
  }
  set setCar(car) {
    this.car = car;
  }

  get getOrigin() {
    return this.origin;
  }
  set setOrigin(origin) {
    this.origin = origin;
  }

  get getDestination() {
    return this.destination;
  }
  set setDestination(destination) {
    this.destination = destination;
  }

  get getTimeTravel() {
    return this.timeTravel;
  }
  set setTimeTravel(timeTravel) {
    this.timeTravel = timeTravel;
  }

  get getPayMethod() {
    return this.payMethod;
  }
  set setPayMethod(payMethod) {
    this.payMethod = payMethod;
  }

  get getPrice() {
    return this.price;
  }
  set setPrice(price) {
    this.price = price;
  }
}

const travel = new Travel("Josué", "Victor", "Toyota", "Juriquilla UAQ", "Jardines de Santiago", "20 min", "Cash", 100);
console.log(travel);