let fox = "Jumped Over The Lazy Dog";

// challenge 1
// readme.md link to challenge 1
// The goal of this challenge is to create a function that will take in a string
// and return an additional string at the end. YOU CANNOT APPEND THE STRING MANUALLY.
function jumpOverFence(fox) {
  // your code here (HINT: use string interpolation, WHICH IS ADDING A VARIABLE TO A STRING)
  // complete this so that the function returns "The Lazy Brown Fox Jumps Over The Fence"
  fox = `Brown Fox Jumps Over The Fence"`;
  return `"The Lazy ${fox}`;
  // other way: fox = `"The Lazy Brown Fox Jumps Over The Fence"`
  // return `${fox}`
}

// test the function
console.log(jumpOverFence(fox)); // should return "The Lazy

// challenge 2
// You will need to take a number and return true or false if the number is even or odd
function isEvenOrOdd(num) {
  // your code here (HINT: use % MODULUS operator DIVIDED BY 2)
  return num % 2 === 0;
}

// test the function
console.log(isEvenOrOdd(10)); // should return true
console.log(isEvenOrOdd(5)); // should return false

// challenge 3
// The goal of this challenge is to create a function that will convert celsius to fahrenheit
function celsiusToFahrenheit(celsiusNumber) {
  // your code here (HINT: use the formula (C * 9/5) + 32) and return the new fahrenheit number passed in as celsius
  return celsiusNumber * 1.8 + 32;
}

// test the function with degree symbol
console.log(celsiusToFahrenheit(30)); // should return 86
console.log(celsiusToFahrenheit(0)); // should return 32

// challenge 4
// find the max number in an array
function findMaxNumber(arr) {
  // your code here (HINT: use Math.max)
  return Math.max(...arr);
}

// test the function
console.log(findMaxNumber([1, 2, 3, 4, 5])); // should return 5

// challenge 5
//  create a function that will wait 2 seconds and then log "Hello World"
function sayHelloWorld() {
  // your code here (HINT: use setTimeout)
  setTimeout(() => {
    console.log("Hello World");
  }, 2000);
}

// test the function
sayHelloWorld(); // should log "Hello World" after 2 seconds
