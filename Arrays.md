# Challenge 1: Find the Largest Number

## Goal

This challenge aims to complete a function that finds and returns the largest number in an array of numbers.

The catch here is that you need to use a specific JavaScript method to determine the maximum value.

## Task

You have a function called `findLargestNumber(arr)` that takes an array (`arr`). Your task is to complete the function so that it returns the largest number in the array.

## Rules

Use the **Math.max** method to determine the largest number in the array. This method will help you find the highest value in the given set of numbers.

## Hints

- The **Math.max** method can take multiple numbers as arguments and return the highest value.
- Use the **spread operator (`...`)** to pass the array elements as arguments to `Math.max`.

### Example

```js
let arr = [5, 10, 15, 20, 25];
console.log(findLargestNumber(arr));
// Output: 25

arr = [-1, -4, -3, -2];
console.log(findLargestNumber(arr));
// Output: -1
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 2: Remove Duplicates from an Array

## Goal

This challenge aims to complete a function that removes duplicate values from an array of words.

The catch here is that you need to use a specific JavaScript feature to remove the duplicates.

## Task

You have a function called `removeDuplicates(arr)` that takes an array (`arr`). Your task is to complete the function so that it returns an array with all duplicate values removed.

## Rules

Use the **Set** object to remove duplicate values from the array. The Set object will help you filter out the repeated items.

## Hints

- The **Set** object automatically removes duplicates when you convert an array into it.
- Use the **spread operator (`...`)** to convert the Set back into an array.

### Example

```js
let arr = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(arr));
// Output: ["apple", "banana", "orange"]

arr = ["cat", "dog", "cat", "fish"];
console.log(removeDuplicates(arr));
// Output: ["cat", "dog", "fish"]
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 3: Filter Even Numbers

## Goal

This challenge aims to complete a function that filters out only the even numbers from an array of numbers.

The catch here is that you need to use a specific JavaScript array method to accomplish this task.

## Task

You have a function called `filterEvenNumbers(arr)` that takes an array (`arr`). Your task is to complete the function so that it returns an array with only the even numbers.

## Rules

Use the **filter** method to filter out even numbers from the array. The **filter** method will allow you to easily create a new array that contains only the values you want.

## Hints

- The **filter** method takes a callback function that determines which elements to keep.
- Use the condition `num % 2 === 0` to identify even numbers.

### Example

```js
let arr = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(arr));
// Output: [2, 4, 6]

arr = [7, 8, 10, 15];
console.log(filterEvenNumbers(arr));
// Output: [8, 10]
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;

# Challenge 4 (Optional): Filter and Rearrange an Array

## Goal

This optional challenge aims to complete a function that rearranges an array by slicing it based on the given steps and then concatenating the remaining parts.

The catch here is that you need to use specific JavaScript array methods to achieve the rearrangement.

## Task

You have a function called `filterArray(arr, steps)` that takes an array (`arr`) and a number of steps (`steps`). Your task is to complete the function so that it rearranges the array by slicing it and concatenating the parts.

## Rules

Use the **slice** and **concat** methods to rearrange the array. The **slice** method will help you split the array into two parts, and the **concat** method will allow you to join these parts back together.

## Hints

- Use **slice(steps)** to get the part of the array starting from the given steps index to the end.
- Use **slice(0, steps)** to get the beginning part of the array up to the given steps index.
- Use **concat** to join the sliced parts back together.

### Example

```js
let arr = [1, 2, 3, 4, 5];
let steps = 2;
console.log(filterArray(arr, steps));
// Output: [3, 4, 5, 1, 2]

arr = ["a", "b", "c", "d"];
steps = 1;
console.log(filterArray(arr, steps));
// Output: ['b', 'c', 'd', 'a']
```

### Final Note

Good luck, and have fun completing this challenge! Remember to check the hints if you need help!

---

&nbsp;
&nbsp;
