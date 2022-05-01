const travel = {
  user: "Josué",
  driver: "Victor",
  car: "Toyota 2020",
  origin: "Juriquilla UAQ",
  destination: "Jardines de Santiago",
  timeTravel: "20 min",
  payMethod: "Credit card",
  price: 100,

  getTravelInfo: function() {
    return `${this.user} is traveling with ${this.driver} in ${this.car} from ${this.origin} to ${this.destination} the estimated travel time is ${this.timeTravel}`;
  }
}

console.log(travel.getTravelInfo());
console.log("Method of payment: " + travel.payMethod);
console.log("Price: " + travel.price);