# Challenge 1: Jump Over the Fence

## Goal

This challenge aims to complete a function that takes in a string and returns a new string with additional content added to the end.

However, there's a catch! You cannot add content manually. Instead, you need to use string interpolation to achieve this.

## Task

You have a function called jumpOverFence(fox) that takes a string (fox). Your task is to complete the function so that it returns the full phrase:

"The Lazy Brown Fox Jumps Over The Fence"

## Rules

DO NOT manually add anything to the string (e.g., no + "Jumps Over The Fence"). This restriction is to help you learn how to use string interpolation effectively, which is a more powerful and flexible way to build strings.

Use string interpolation to add a variable to a string.

### Hints

String interpolation is a technique for building strings using placeholders for variables.

In JavaScript, you can use template literals (with backticks ` `) to easily insert variables into strings.

### Example

let animal = "dog";
console.log(`The quick brown ${rest of sentence}.`); // do not include spaces in your variable names.
// Output: "The quick brown dog jumps over the lazy dog."

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

\
&nbsp;
\
&nbsp;

# Challenge 2: Even or Odd

## Goal

This challenge aims to complete a function that takes in a number and returns `true` or `false` depending on whether the number is even or odd.

The catch here is that you need to use a specific operator to determine if the number is even or odd.

## Task

You have a function called `isEvenOrOdd(num)` that takes a number (`num`). Your task is to complete the function so that it returns `true` if the number is even, and `false` if the number is odd.

## Rules

Use the **% (modulus)** operator to determine if the number is even or odd. This operator will help you find the remainder when dividing by 2.

## Hints

- A number is **even** if dividing it by 2 gives a remainder of 0.
- Use the **modulus** operator (`%`) to find the remainder when dividing by 2.

### Example

```js
let num = 4;
console.log(isEvenOrOdd(num));
// Output: true

num = 7;
console.log(isEvenOrOdd(num));
// Output: false
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

\
&nbsp;
\
&nbsp;

# Challenge 3: Celsius to Fahrenheit

## Goal

This challenge aims to complete a function that converts a temperature from Celsius to Fahrenheit.

The catch here is that you need to use the correct formula to convert between these temperature units.

## Task

You have a function called `celsiusToFahrenheit(celsiusNumber)` that takes a number (`celsiusNumber`). Your task is to complete the function so that it returns the equivalent temperature in Fahrenheit.

## Rules

Use the formula **(C \* 9/5) + 32** to convert Celsius to Fahrenheit.

## Hints

- **Celsius to Fahrenheit** conversion requires multiplying the Celsius temperature by 9/5 and then adding 32.
- Make sure to follow the order of operations carefully when applying the formula.

### Example

```js
let celsiusNumber = 30;
console.log(celsiusToFahrenheit(celsiusNumber));
// Output: 86

celsiusNumber = 0;
console.log(celsiusToFahrenheit(celsiusNumber));
// Output: 32
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 4: Find the Max Number

## Goal

This challenge aims to complete a function that finds and returns the maximum number in an array of numbers.

The catch here is that you need to use a specific built-in JavaScript method to determine the maximum value.

## Task

You have a function called `findMaxNumber(arr)` that takes an array (`arr`). Your task is to complete the function so that it returns the largest number in the array.

## Rules

Use the **Math.max** method to determine the maximum number in the array. This method will help you find the highest value in the given set of numbers.

## Hints

- The **Math.max** method can take multiple numbers as arguments and return the highest value.
- Use the **spread operator (`...`)** to pass the array elements as arguments to `Math.max`.

### Example

```js
let arr = [3, 5, 7, 2, 8];
console.log(findMaxNumber(arr));
// Output: 8

arr = [-10, -3, -25, -7];
console.log(findMaxNumber(arr));
// Output: -3
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 5: Say Hello World with a Delay

## Goal

This challenge aims to complete a function that waits for 2 seconds before logging "Hello World" to the console.

The catch here is that you need to use a built-in JavaScript method to create the delay.

## Task

You have a function called `sayHelloWorld()` that should log "Hello World" after waiting for 2 seconds. Your task is to complete the function to achieve this delay.

## Rules

Use the **setTimeout** method to introduce the delay. This method will allow you to execute code after a specified amount of time.

## Hints

- The **setTimeout** function takes a callback function and a delay in milliseconds.
- You need to specify **2000 milliseconds** (which is equal to 2 seconds) as the delay.

### Example

```js
sayHelloWorld();
// Output after 2 seconds: "Hello World"
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;
