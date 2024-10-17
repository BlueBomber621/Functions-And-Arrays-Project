# Challenge 1: Square a Number

## Goal

This challenge aims to complete a function that takes in a number and returns the number squared.

The catch here is that you can use different methods to achieve this task.

## Task

You have a function called `squareNumber(num)` that takes a number (`num`). Your task is to complete the function so that it returns the number squared.

## Rules

Use **Math.pow** or multiply the number by itself to find the square of the number.

## Hints

- You can use **Math.pow(num, 2)** to calculate the square of the number.
- Alternatively, you can simply multiply the number by itself (e.g., `num * num`).

### Example

```js
let num = 5;
console.log(squareNumber(num));
// Output: 25

num = 3;
console.log(squareNumber(num));
// Output: 9
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 2: Repeat a String

## Goal

This challenge aims to complete a function that takes in a string and returns the string repeated 3 times using a loop.

The catch here is that you need to use a loop to achieve the repetition.

## Task

You have a function called `repeatString(str)` that takes a string (`str`). Your task is to complete the function so that it returns the string repeated 3 times.

## Rules

Use a **loop** to repeat the string 3 times.

## Hints

- You can use a **for loop** to iterate and concatenate the string to itself multiple times.
- Start with an empty string and add the input string to it on each iteration of the loop.

### Example

```js
let str = "Hello";
console.log(repeatString(str));
// Output: "HelloHelloHello"

str = "abc";
console.log(repeatString(str));
// Output: "abcabcabc"
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 3: Scoped Variables and Function

## Goal

This challenge aims to complete a function that makes use of scoped variables and returns a string.

The catch here is that you need to create a nested function and utilize scoped variables effectively.

## Task

You have a function called `scopingData()`. Your task is to complete the function by creating a variable inside the function, defining another function inside it, and then returning a value from the nested function.

## Rules

Create a **variable** within the `scopingData` function. Then, create a **nested function** that uses the scoped variable and returns a string.

## Hints

- Use a **function inside a function** to create different scopes.
- The **inner function** should use the variable defined in the outer function.

### Example

```js
function scopingData() {
  let hello = "Hello";

  function world() {
    return `${hello} World`;
  }

  return world();
}

console.log(scopingData());
// Output: "Hello World"
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 4: Reverse a String

## Goal

This challenge aims to complete a function that takes in a string and returns the string reversed.

The catch here is that you need to use specific JavaScript methods to reverse the string.

## Task

You have a function called `reverseString(str)` that takes a string (`str`). Your task is to complete the function so that it returns the input string in reverse order.

## Rules

Use the **String.split**, **Array.reverse**, and **Array.join** methods to reverse the string.

## Hints

- Use the **split('')** method to convert the string into an array of characters.
- Use the **reverse()** method to reverse the order of the characters in the array.
- Use the **join('')** method to convert the reversed array back into a string.

### Example

```js
let str = "Hello";
console.log(reverseString(str));
// Output: "olleH"

str = "world";
console.log(reverseString(str));
// Output: "dlrow"
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 5: Generate a Random Number

## Goal

This challenge aims to complete a function that returns a random number between 1 and 10.

The catch here is that you need to use a specific JavaScript method to generate the random number.

## Task

You have a function called `randomNumber()`. Your task is to complete the function so that it returns a random integer between 1 and 10.

## Rules

Use **Math.random** and **Math.floor** to generate the random number within the specified range.

## Hints

- **Math.random()** returns a random number between 0 (inclusive) and 1 (exclusive).
- Multiply the result by 10 to scale it up to a value between 0 and 10.
- Use **Math.floor()** to round down to the nearest integer, and add 1 to ensure the value is between 1 and 10.

### Example

```js
console.log(randomNumber());
// Output: A random number between 1 and 10 (e.g., 7)

console.log(randomNumber());
// Output: A random number between 1 and 10 (e.g., 3)
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;
