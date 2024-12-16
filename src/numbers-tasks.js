/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}
/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

/**
 * Returns the last digit of an integer number.
 */
function getLastDigit(value) {
  return value % 10;
}

/**
 * Returns a number by given string representation.
 */
function parseNumberFromString(value) {
  return parseFloat(value);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a, b, c.
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns the number rounded to the specified power of 10.
 */
function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

/**
 * Returns true if the number is prime; otherwise false.
 */
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Converts value to a number and returns it if successful; otherwise returns the default value.
 */
function toNumber(value, def) {
  const num = parseFloat(value);
  return Number.isNaN(num) ? def : num;
}

/**
 * Returns the cube of the given number.
 */
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 */
function getFibonacciNumber(index) {
  if (index <= 1) return index;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= index; i += 1) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

/**
 * Returns the sum of all numbers from 1 to n.
 */
function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Returns the sum of the digits of a given number.
 */
function getSumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 */
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  return Math.log2(num) % 1 === 0;
}

/**
 * Returns the sine of a number.
 */
function getSine(num) {
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 */
function numberToStringInBase(number, base) {
  return number.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 */
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

/**
 * Returns a string representation of a number in fixed-point notation.
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

/**
 * Returns a string representation of a number in normal notation rounded to precision significant digits.
 */
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

/**
 * Returns the primitive value of a Number object.
 */
function getNumberValue(number) {
  return number.valueOf();
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 */
function isNumber(number) {
  return typeof number === 'number' && Number.isFinite(number);
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 */
function isInteger(number) {
  return Number.isInteger(number);
}

/**
 * Returns a floating point number or NaN.
 */
function getFloatOnString(str) {
  const result = parseFloat(str);
  return Number.isFinite(result);
}

/**
 * Returns an integer of the specified base or NaN.
 */
function getIntegerOnString(str, base) {
  const parsed = parseInt(str, base);
  return Number.isInteger(parsed);
}

/**
 * Returns whether a number is a safe integer.
 */
function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

/**
 * Returns the smallest integer less than or equal to a given number.
 */
function roundToSmallestInteger(number) {
  return Math.floor(number);
}

/**
 * Returns the largest integer greater than or equal to a given number.
 */
function roundToLargestInteger(number) {
  return Math.ceil(number);
}

/**
 * Returns the value of a number rounded to the nearest integer.
 */
function roundToNearestInteger(number) {
  return Math.round(number);
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 */
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

/**
 * Returns the sum of numbers.
 */
function getSumOfNumbers(x1, x2, x3) {
  return parseFloat((x1 + x2 + x3).toFixed(1));
}

/**
 * Returns the largest number.
 */
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

/**
 * Returns a random integer in the range from min to max.
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 */
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 */
function getCountOfOddNumbers(number) {
  return Math.ceil(number / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
