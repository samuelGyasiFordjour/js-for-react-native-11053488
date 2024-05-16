# Student ID: 11053488

## Task 1

In the file `arrayManipulation.js`, the function `processArray` is created. It takes an array of numbers as an argument and returns a new array. In this new array, each even number from the input array is squared and each odd number is tripled.

## Task 2

In the same `arrayManipulation.js` file, the function `formatArrayStrings` is added. This function takes two arrays as arguments: an array of strings and an array of numbers that have been processed by the `processArray` function from Task 1. This `formatArrayStrings` function modifies each string from the string array based on the corresponding number in the number array: The string is capitalized if the corresponding number is even, and converted to lowercase if the number is odd.

## Task 3

A new file called `userInfo.js` is created, containing the function `createUserProfiles`. This function takes an array of names and the array of modified names from Task 2 as input and returns an array of objects. Each object contains `originalName`, `modifiedName`, and `id` (which is auto-incremented starting from 1).

