'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/*
//Lecture

//SLICE METHOD ---> It does not muted the array
let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.slice(2));
console.log(arr1.slice(2, 4));
console.log(arr1.slice(-2));
console.log(arr1.slice(-1));
console.log(arr1.slice(1, -2));
console.log(arr1.slice());
console.log([...arr1]);

//SPLICE METHOD ---> It muted the array
// console.log(arr1.splice(2));
// console.log(arr1.splice(-1));
// console.log(arr1);
// arr1.splice(1, 2);
// console.log(arr1);

//REVERSE --> It also muted the original array
const arr3 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr3.reverse());
console.log(arr3);

//CONCAT
const letter = arr1.concat(arr2);
console.log(letter);
console.log([...arr1, ...arr2]);

//JOIN
console.log(letter.join(' - ')); */

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*
//Array AT Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array elements in traditional way
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

//Using at method to get last element in an array
console.log(arr.at(-1));

//At method also used for string
console.log('jonas'.at(0));
console.log('jonas'.at(-1)); */

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/*
//FOR EACH LOOP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------------FOREACH----------');

//using for each method
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400) */

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//FOR EACH WITH MAP AND SETS

//forEach with MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//forEach with SET
//It's better to know that 1) Sets haven't any key and any index so middle
//parameter is not necessary here
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}, , ${value}`);
});
