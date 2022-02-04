//! Miserable Parody of a Calculator
//? Hard to solved
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("13+2-5*2") ➞ 5

// calculator("49/7*2-3") ➞ 11
// Notes
// There will be no brackets in the input line.
// No need to calculate mathematical functions (sin, cos, ln...).
// There are no gaps in the expression.
// collected form stack overflow : https://stackoverflow.com/questions/2276021/evaluating-a-string-as-a-mathematical-expression-in-javascript

function calculator(str) {
    return Function(`'use strict'; return (${str})`)();
}

console.log(calculator("13+2-5*2"));

//! Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
// greeting("Matt") ➞ "Hello, Matt!"

// greeting("Helen") ➞ "Hello, Helen!"

// greeting("Mubashir") ➞ "Hello, my Love!"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!

function greeting(name) {
    return name === "Mubashir" ? "Hello, my Love!" : `Hello, ${name}!`;
}

//!   Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true
// Notes
// Don't forget to return the result.

function makesTen(a, b) {
    return a === 10 || b === 10 || a + b === 10 ? true : false;
}

//! Let's Fuel Up!
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100
// Notes
// Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.

function calculateFuel(n) {
    return n > 10 ? n * 10 : 100;
}

//! Buggy Code (Part 2)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// maxNum(3, 7) ➞ 7

// maxNum(-1, 0) ➞ 0

// maxNum(1000, 400) ➞ 1000
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!

function maxNum(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

//! Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
    return [num1, num2];
}

//! Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false

function comp(str1, str2) {
    return str1.length === str2.length ? true : false;
}

//! Is the String Empty?
//? important
// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.

function isEmpty(s) {
    // return(s.length>0)?false:true;
    return s == "" ? true : false;
    // return (s.length===0)?true:false;
}

//! Multiple of 100
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true
// Notes
// Don't forget to return the result.

function divisible(num) {
    return num % 100 == 0 ? true : false;
}

//! Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

function length(str) {}

//! Divides Evenly
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25
// Notes
// a will always be greater than or equal to b.

function dividesEvenly(a, b) {
    return a % b == 0 ? true : false;
}

//! Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

// Examples
// stringInt("6") ➞ 6

// stringInt("1000") ➞ 1000

// stringInt("12") ➞ 12
// Notes
// All numbers will be whole.
// All numbers will be positive.

function stringInt(str) {
    return Number.parseInt(str);
}

//! Area of a Rectangle
// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

// Examples
// area(3, 4) ➞ 12

// area(10, 11) ➞ 110

// area(-1, 5) ➞ -1

// area(0, 2) ➞ -1

function area(h, w) {
    return h < 1 || w < 1 ? -1 : h * w;
}

//! Minimal I: If Boolean Then Boolean
//?Important
// In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

// In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

// Keep your code clean and readable.
// While not violating the first principle: get rid of everything superfluous.
// In order to achieve this you should:

// Deepen your knowledge of logics.
// Deepen your understanding of the particular language you're coding with.
// I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

// Goal
// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

// Write a function that returns true if the given integer is even, and false if it's odd.

// Tips
// Using an if statement in order to return boolean or to set a variable to a boolean is redundant.

// A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:

// function legalAge(age) {
//   if(age >= 18) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:

// function legalAge(age) {
//   return age >= 18
// }
// Notes
// This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
// Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.

function isEven(n) {
    return n % 2 === 0 ? true : false;
}

//! Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
// concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"
// Notes
// Don't forget to return the result.

function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

//! Buggy Code
// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

// Examples
// has_bugs(true) ➞ "sad days"

// has_bugs(false) ➞ "it's a good day"

function has_bugs(buggyCode) {
    if (buggyCode) {
        return "sad days";
    } else {
        return "it's a good day";
    }
}

//! Century Crisis
//? link : https://edabit.com/challenge/DcmB9Ycm58FdkPe7k
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

// Examples
// futurePeople(256, 2) ➞ 976

// futurePeople(3248, 6) ➞ 5408

// futurePeople(5240, 3) ➞ 6320

function futurePeople(population, n) {}

//! Evaluate an Equation
//?link : https://edabit.com/challenge/X6PDfNfJwcB4TkQuQ
// Create a function that evaluates an equation.

// Examples
// eq("1+2") ➞ 3

// eq("6/(9-7)") ➞ 3

// eq("3+2-4") ➞ 1
// Notes
// Don't print, return a value.
// Return the value, not the equation.
// The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used. Check the Resources for more information.

function equation(s) {
    return Function(`'use strict'; return (${s})`)();
}

//! Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
// Notes
// You can expect only positive integers for vote counts.

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

//! Return Negative
//?link : https://edabit.com/challenge/iDxwkarcJcmkDA8tq
// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

// Examples
// returnNegative(4) ➞ -4

// returnNegative(15) ➞ -15

// returnNegative(-4) ➞ -4

// returnNegative(0) ➞ 0
// Notes
// N/A

function returnNegative(n) {
    if (n === 0) {
        return 0;
    } else if (n < 0) {
        return n;
    } else {
        return Number(`-${n}`);
    }
}

console.log(returnNegative(-4));

//! Find Out the Leap Year
// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

// Examples
// leapYear(2020) ➞ true

// leapYear(2021) ➞ false

// leapYear(1968) ➞ true
// Notes

function leapYear(year) {
    return year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)
        ? true
        : false;
}

//! Reverse an Array
//?Important
// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

function reverse(arr) {
    // return arr.reverse();

    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i]);
    }
    return reverseArray;
}

//! Movie Theatre Admittance
//?link : https://edabit.com/challenge/fP7gFvDaBymoZrXFx
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

// Examples
// acceptIntoMovie(14, true) ➞ true

// acceptIntoMovie(14, false) ➞ false

// acceptIntoMovie(16, false) ➞ true
// Notes
// age is a decimal.
// isSupervised is a boolean.

function acceptIntoMovie(age, isSupervised) {
    if (isSupervised || age >= 15) {
        return true;
    } else {
        return false;
    }
}
console.log(acceptIntoMovie(14, true));

//! Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefully.
function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
    return arr;
}

//! Drinks Allowed?
//?link : https://edabit.com/challenge/PwpJNJiysvq3AuYJ8
// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

// Examples
// shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// shouldServeDrinks(30, true) ➞ false
// Notes
// Return true or false.
// Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

function shouldServeDrinks(age, onBreak) {}

//! Format I: Template String
//?link :https://edabit.com/challenge/DCmM4Eo6GQfrJoKXc
// Write a template string according to the following example:

// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
// Tips
// A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:

// const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."
// You can put an expression inside the curly braces :

// const age = 12;
// `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."

// modify the template variable to be a template string
function format(a, b, c) {
    // the result string must give: "Their names were: a, b and c."
    const template = `your template string`;
    return template;
}

//! Arrow Functions
//link : https://edabit.com/challenge/qcw8QBqa4amN2x4q4
// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write five adder functions:

// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.
// Tips
// Functions that consist only of a return can be written as a one-liner with an arrow function.

// For example, the code:

// function areSame(a, b) {
//     return a == b;
// }
// Can be simplified to:

// areSame = (a, b) => a == b;
// Bonus
// (a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().

// Notes
// This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
// Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.

let add2 = (x) => x + 2;

let add3 = (x) => x + 3;

let add5 = (x) => x + 5;

let add7 = (x) => x + 7;

let add11 = (x) => x + 1;

//! Using Ternary Operators
is_nice = true;

// Using ternary operator.
state = is_nice ? "nice" : "not nice";

// Equivalent code using multi-line if statements.
if (is_nice) state = "nice";
else state = "not nice";

//! Minimal IV: if-else if-else Inferno - Clear conditions
function equilibrium(x) {
    if (x > 0) return "positive";
    if (x < 0) return "negative";
    return true;
}

//! Moving House
//link : https://edabit.com/challenge/HbjxJg3jqT54vK7uw
// I'd like to calculate how long on average I've lived in a single house.

// Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.

// Examples
// yearsInOneHouse(30, 1) ➞ 15

// yearsInOneHouse(15, 2) ➞ 5

// yearsInOneHouse(80, 0) ➞ 80
// Notes
// You can assume that the tests include people who've always lived in a house.
// Round to the nearest year.

function yearsInOneHouse(age, moves) {
    return Math.round(age / (moves + 1));
}


//! Is the String Odd or Even?
//link : https://edabit.com/challenge/2tcuBxn37oouMeErN
// Given a string, return true if its length is even or false if the length is odd.

// Examples
// oddOrEven("apples") ➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

// oddOrEven("pears") ➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

// oddOrEven("cherry") ➞ true
// Notes

function oddOrEven(s) {
	return (s.length%2===0)?true:false;
}


// ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6]
const [a,b] = arr;

//! Circle or Square
// Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.

// Examples
// circle_or_square(16, 625) ➞ True

// circle_or_square(5, 100) ➞ False

// circle_or_square(8, 144) ➞ True
// Notes
// You can use Pi to 2 decimal places (3.14).
// Circumference of a circle equals 2 * Pi * radius.
// To find the perimeter of a square using its area, find the square root of area (to get side length) and multiply that by 4.

function circle_or_square(rad, area){
    let circle = 2*Math.PI*rad;
    let square = Math.sqrt(area) * 4;
    return (circle>square)?true:false;
    
}
console.log(circle_or_square(10,3));

//! I'd Like a New Shade of Blue, Please
//link : https://edabit.com/challenge/2rjHtbg32PrtZdF66
// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.
// Examples
// howManyWalls(100, 4, 5) ➞ 5

// howManyWalls(10, 15, 12) ➞ 0

// howManyWalls(41, 3, 6) ➞ 2
// Notes
// Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
// All walls will have the same dimensions.
// All numbers will be positive integers.

function howManyWalls(n, w, h) {
    return Math.floor(n / (w * h));
}

// console.log(howManyWalls(41, 3, 6));

// Nth Even Number
//link : https://edabit.com/challenge/Yj2QWQG7oHREM6DRo
// Create a function that takes a number n and returns the nth even number beginning with 0 as the first.

// Examples
// nthEven(1) ➞ 0
// 0 is first even number

// nthEven(2) ➞ 2
// 2 is second even number

// nthEven(100) ➞ 198

function nthEven(n) {
    return n * 2 - 2;
}

// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
// intToString(4) ➞ "4"

// stringToInt("4") ➞ 4

// intToString(29348) ➞ "29348"

function intToString(num) {
    return String(num);
}

function stringToInt(num) {
    return Number.parseInt(num);
}

// To the Power of _____
function calculateExponent(num, exp) {
    return num ** exp;
}

//! Many Operators!
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.

// Examples
// operate(1, 2, "+") ➞ 3
// 1 + 2 = 3

// operate(7, 10, "-") ➞ -3
// 7 - 10 = -3

// operate(20, 10, "%") ➞ 0
// 20 % 10 = 0

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "%":
            return num1 % num2;
            break;
    }
}
// console.log(operate("%", 3, 4));


//! On/Off Switches
// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

// Examples
// posCom(1) ➞ 2

// posCom(3) ➞ 8

// posCom(10) ➞ 1024
// Notes
// All numbers will be whole and positive.
function posCom(num) {
	return 2 ** num;
}

// console.log(posCom(3));

//! Among Us Imposter Formula
// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

// Examples
// imposterFormula(1, 10) ➞ "10%"

// imposterFormula(2, 5) ➞ "40%"

// imposterFormula(1, 8) ➞ "13%"
// Notes
// The player limit is 10 and the imposter count can only go up to 3.

function imposterFormula(i, p) {
	return Math.round(i*(100/p))+"%";
}

// console.log(imposterFormula(2,5));