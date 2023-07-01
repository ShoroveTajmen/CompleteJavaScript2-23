'use strict';

//exampple 1 of clousure
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

//re-assigning f function
h();
f();
console.dir(f);

//exampple 2 of clousure
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} pppassengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
//Clousers
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.log(booker);
/*
////////////////////////////////////////////////
////////////////////////////////////////////////
//Immediately Invoked Function Expression
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => {
  console.log('This will never run again');
})(); */

/*
////////////////////////////////////////////////////
///////////////////////////////////////////////////
//The call and apply method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//Does not work
//book(23, 'Sarah Williams');

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//another way
book.call(swiss, ...flightData);

//Blind method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLW = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyplanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyplanes();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplanes.bind(lufthansa));

//Partial apppplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRaate = function (rate) {
  return function (value) {
    return value + value + rate;
  };
};
const addVat = addTaxRaate(0.23);
console.log(addVat(100));
console.log(addVat(23)); */
/*
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hey')('Jonas'); */

/*
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Function accepting Callback Function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log('&&&');
};
document.body.addEventListener('click', high5);
['jonas', 'Martha', 'Adam'].forEach(high5); */

/*
        ////////////////////////////////////////////
        //default parameter
        const bookings = [];
        const createBooking = function (
          flightNum,
          numPassengers = 1,
          price = 199 * numPassengers
        ) {
          //ES5
          //numPassengers = numPassengers || 1;
          //price = price || 199;

          const booking = {
            flightNum,
            numPassengers,
            price,
          };
          console.log(booking);
          bookings.push(booking);
        };
        createBooking('LH23');
        createBooking('LH123', 2, 800);
        createBooking('LH123', 2);
        createBooking('LH123', 5);
        createBooking('LH123', undefined, 1000); */

/*
////////////////////////////////////////////////////
///////////////////////////////////////////////////
//Passing arguments works: value vs. reference
const flight = 'LH123';
const jons = {
  name: 'jonas Schmedtmann',
  passport: 244734897777,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 244734897777) {
    alert('Checked In');
  } else {
    alert('wrong passport..');
  }
};
// checkIn(flight, jons);
// console.log(flight);
// console.log(jons);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = jons;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jons);
checkIn(flight, jons); */
