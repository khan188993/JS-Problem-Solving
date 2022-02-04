//* Very Easy Problems Solvings 

//! 1) Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.

// Examples
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function addition(a, b) {
    return a + b;
}
//? console.log(addition(2,5));

//! 2) Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

function convert(minutes) {
    return minutes * 60;
}
// ? console.log(convert(2));

//! 3) Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
function addition(num) {
    return ++num;
}
// ? console.log(addition(2));

//!4) Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.

function triArea(base, height) {
    return (base * height) / 2;
}

// ? console.log(2,5);

//! 5)Convert Age to Days
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

function calcAge(age) {
    return age * 365;
}
// ? console.log(calcAge(2));

//! Buggy Code (Part 1)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// cubes(3) ➞ 27

// cubes(5) ➞ 125

// cubes(10) ➞ 1000
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

function cubes(a) {
    // retunr a ** 3 //return spelling is wrong
    return a ** 3;
}
// ? console.log(cubes(2));

//! Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr) {
    return arr[0];
}

// ? console.log(arr([2,3,4,3,4,5]));

//! Power Calculator
// Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600
// Notes
// Requires basic calculation of electrical circuits (see Resources for info).
function circuitPower(voltage, current) {
    return voltage * current;
}
// ? console.log(circuitPower(2,100));

//! Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.

function howManySeconds(hours) {
    return hours * 60 * 60;
}

// ? console.log(howManySeconds(2));

//! Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10
// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.
// Don't forget to return the result.

function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}

// ? console.log(nextEdge(2,3));

//! Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// Notes
// The tests only use positive and negative integers.
// Don't forget to return the result.

function remainder(x, y) {
    return x % y;
}
// ? console.log(remainder(-9,45));

//! Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22
// Notes
// Don't forget to return the result.
// If you're stuck, find help in the Resources tab.
// If you're really stuck, find solutions in the Solutions tab.

function findPerimeter(length, width) {
    return (length + width) * 2;
}
// ?//?  console.log(findPerimeter(2,3));

//! Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.

function giveMeSomething(a) {
    return `something ${a}`;
}
//? console.log(giveMeSomething('is better than nothing'));

//! Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// squared(5) ➞ 25

// squared(9) ➞ 81

// squared(100) ➞ 10000
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!

function squared(a) {
    return a * a;
}

//! Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true
// Notes
// Don't forget to return the result.

function lessThanOrEqualToZero(num) {
    return num <= 0 ? true : false;
}

//! Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

function sumPolygon(n) {
    return n > 2 && (n - 2) * 180;
}
// console.log(sumPolygon(3));

//! Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100
function points(twoPointers, threePointers) {
    return twoPointers * 2 + threePointers * 3;
}

//! Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"
// Notes
// Don't forget to return the result.

function nameString(name) {
    var b = "Edabit";
    var result = name + b;
    return result;
}

//! Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true
// Notes

function lessThan100(a, b) {
    return a + b < 100 ? true : false;
}

//! Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER! i++ was bugged

function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

//! Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
// Examples
// swap(100, 200) ➞ [200, 100]

// swap(44, 33) ➞ [33, 44]

// swap(21, 12) ➞ [12, 21]

function swap(a, b) {
    /* let temp = a;
    a = b;
    b = temp;
    return [a, b]; */
    return [a,b] = [b,a];
}


//! The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50
// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.


function animals(chickens, cows, pigs) {
	return (chickens*2)+(cows*4)+(pigs*4);
}

//! Using the "&&" Operator
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.

// Examples
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false
// Notes

function and(a, b) {
	return (a && b)?true: false;
}

//! Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false
// Notes
// Don't forget to return the result.

function isSameNum(num1, num2) {
	return (num1===num2)?true:false;
}

//! Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
// Examples
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0
// Notes
// Inputs will be numbers greater than or equal to 0.

function footballPoints(wins, draws, losses) {
	return (wins*3)+(draws*1)+(losses*0);
}

//! Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0
// Notes
// Don't forget to return the result.

function convert(hours, minutes) {
	return (hours*60*60)+(minutes*60);
}

//! Fix the Expression
// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

// Examples
// isSeven(4) ➞ false

// isSeven(9) ➞ false

// isSeven(7) ➞ true
// Notes
// The bug can be hard to find, so look closely!

function isSeven(x) {
    return x === 7 ? true : false;
}

//! Equality Check
// In this challenge, you must verify the equality of two different values given the parameters a and b.

// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are not.

// Examples
// checkEquality(1, true) ➞ false
// A number and a boolean: the value and type are different.

// checkEquality(0, "0") ➞ false
// A number and a string: the type is different.

// checkEquality(1,  1) ➞ true
// A number and a number: the type and value are equal.

function checkEquality(a, b) {
    return a === b;
}

//! Profitable Gamble
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

// To illustrate:

// profitableGamble(0.2, 50, 9)
// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Examples
// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true
// Notes
// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
    return prob * prize > pay ? true : false;
}

// Boolean to String Conversion

function boolToString(flag) {
    return String(flag);
}

//! Using Arrow Functions
// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

const arrowFunc = (x) => x;

//! Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000
// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

function frames(minutes, fps) {
    return minutes * (fps * 60);
}