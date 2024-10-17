// array challenges 1-5

// You will need to create 3 arrays and use them to solve the following challenges:

// challenge 1
function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Should output: 8

// challenge 2
// create an array of words and only rerturn words that are 5 characters long
function removeDuplicates(arr) {
  return new Set(arr);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Should output: [1, 2, 3, 4, 5]

// challenge 3
function filterEvenNumbers(arr) {
  return arr.filter(evenCheck);

  function evenCheck(num) {
    return num % 2 === 0;
  }
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output: [2, 4]

// challenge 4 (optional)
function filterArray(arr, steps) {
  return arr.concat(arr.slice(arr, steps)).slice(steps, steps + 5);
}

console.log(filterArray([1, 2, 3, 4, 5], 2)); // Should output: [3, 4, 5, 1, 2]

// challenge 5 (optional)
function rotateArray(arr, steps) {
  return arr.concat(arr.slice(arr, steps + 1)).slice(steps + 1, steps + 6);
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Should output: [4, 5, 1, 2, 3]
