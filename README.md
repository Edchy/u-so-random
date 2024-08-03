# u-so-random

A simple JavaScript library for generating random numbers within a specified range.

## Installation

You can install `u-so-random` using npm or yarn like so:

```bash
npm install u-so-random
```

```bash
yarn add u-so-random
```

Usage

Import the getRandomNumber function from u-so-random and use it to generate random numbers within a specified range.

// Import getRandomNumber function
import { getRandomNumber } from 'u-so-random';

// Example 1: Generate a random number between 1 and 10
const min1 = 1;
const max1 = 10;
const randomNum1 = getRandomNumber(min1, max1);
console.log(`Random number between ${min1} and ${max1}: ${randomNum1}`);

// Example 2: Generate a random number between -5 and 5
const min2 = -5;
const max2 = 5;
const randomNum2 = getRandomNumber(min2, max2);
console.log(`Random number between ${min2} and ${max2}: ${randomNum2}`);

API

getRandomNumber(min, max)

Generates a random integer between min (inclusive) and max (inclusive).

    •	min (number): Minimum value (inclusive).
    •	max (number): Maximum value (inclusive).
    •	Returns: A random integer between min and max.

Examples

    •	getRandomNumber(1, 10) will generate a random number between 1 and 10.
    •	getRandomNumber(-10, 0) will generate a random number between -10 and 0.
    •	getRandomNumber(0, 100) will generate a random number between 0 and 100.

License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
