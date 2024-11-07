// index.js

// Function to generate a random number between min (inclusive) and max (inclusive)
export default function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export the function to make it accessible outside this module
// module.exports = {
//   getRandomNumber,
// };
