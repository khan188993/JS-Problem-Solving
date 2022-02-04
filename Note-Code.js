// 1)Checking Animal leg numbers by their quantities.
/* 
Make A function were input parameter will me 3animals numbers[chickens,cows,pigs] ,chichkens has two legs,cow and pig both has 4 legs now calculate there lags by the given numbers of there
*/

function animals(chickens, cows, pigs) {
    let chickensLeg = 2;
    let cowsLegs = 4;
    let pigLegs = 4;

    return chickens * chickensLeg + cows * cowsLegs + pigs * pigLegs;
}

//2)Checking Same number of two arguments

function isSameNum(num1, num2) {
    let result = num1 === num2 ? true : false;
    return result;
}

//3)Counting Football Points by wins,draws,losses

function footballPoints(wins, draws, losses) {
    let winPoints = 3;
    let drawPoints = 1;
    let loosePoints = 0;

    return wins * winPoints + draws * drawPoints + losses * loosePoints;
}

//convert hour into minutes

function convert(hours, minutes) {
    return hours * 60 * 60 + minutes * 60;
}

//Checking Equalities of value
function checkEquality(a, b) {
    return a === b;
}

//Profitable Gamble
function profitableGamble(prob, prize, pay) {
    let result = prob * prize > pay ? true : false;

    return result;
}

//String to Calculator
function calculator(str) {
    return new Function("return " + str)();
}

console.log(calculator("2+2+3"));

//Checking 10 Values by function arguments;

function makesTen(a, b) {
    let result = a == 10 || b == 10 || a + b == 10 ? true : false;
    return result;
}

//Calculate Fuel
function calculateFuel(n) {
    if (n < 10) {
        return 100;
    }

    return n * 10;
}

console.log(calculateFuel(15));

//is Empty sting Checked
function isEmpty(s) {
    let result = s == "" ? true : false;
    return result;
}

console.log(isEmpty(" "));

//Divide by 5
function divisibleByFive(n) {
    let result = n % 5 == 0 ? true : false;
    return result;
}

//divisible
function divisible(num) {
    let result = num % 100 == 0 ? true : false;
    return result;
}

// dividesEvenly
function dividesEvenly(a, b) {
    let result = a % b == 0 ? true : false;
    return result;
}

//String to integer convert
function stringInt(str) {
    return parseInt(str);
}

//Leap Year
function leapYear(year) {
    let result = (year * 100) % 400 == 0 ? true : false;
    return result;
}

//Area calculating
function area(h, w) {
    if (h <= 0 || w <= 0) {
        return -1;
    }

    return h * w;
}

//Concat Name of function arguments
function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

console.log(concatName("arfan", "khan"));

//Add Upper of number
function addUp(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result + i;
    }
    return result;
}

console.log(addUp(4));

//minMax
function minMax(arr) {
    return [minNMath.min(...arr), Math.max(...arr)];
}

console.log(minMax([2, 3, 4, 65, 5]));

//whichIsLarger
function whichIsLarger(f, g) {
    if (f() > g()) {
        return "f";
    } else if (g() > f()) {
        return "g";
    }

    return "neither";
}

console.log(
    whichIsLarger(
        () => 11,
        () => 11
    )
);

//Decimal to binary convert octal =8,hexa=16,
function binary(decimal) {
    return decimal.toString(2);
}

//Max Value of Array
function canNest(arr1, arr2) {
    let maxValueArr1 = Math.max(...arr1);
    let maxValueArr2 = Math.max(...arr2);
    let minValueArr1 = Math.min(...arr1);
    let minValueArr2 = Math.min(...arr2);

    const result =
        minValueArr1 > minValueArr2 && maxValueArr1 < maxValueArr2
            ? true
            : false;
}

canNest([1, 2, 3, 4], [2, 3]);

// numberSquares
function numberSquares(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = result + i;
        if (i > 1) {
            result = Math.pow(i, 2) + result;
        }
    }

    console.log(result);
}

numberSquares(2);

// console.log(Math.pow(5,2))
// numberSquares
function numberSquares(n) {
    let result = 1;

    if (n > 1) {
        result = Math.pow(n, 2) + result;
    }

    console.log(result);
}

numberSquares(3);

// Tpye Check Of Value in Js

function inString(myString) {
    return myString.constructor === String;
    //   return myArray.constructor === Array;
    //   return myNumber.constructor === Number;
    //   return myObject.constructor === Object;
}

console.log(inString(""));

//Sum of Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(`${sum}+${i}=${sum + i}`);
    sum = sum + i;
}
console.log(`result = ${sum}`);

//LoopingAdd
function LoopingAdd(param) {
    let sum = 0;
    for (let i = 1; i <= param; i++) {
        sum += i;
    }
    return sum;
}
console.log(LoopingAdd(10));

//*)Programming Hero Coding Solving

//1) Question : Calculate Feet To Mile
// ------------------------------------------
//solution no. (1) :

function feetToMile(feetNumber) {
    if (feetNumber >= 0 && Number.isInteger(feetNumber)) {
        const perFeetToMile = 0.000189394;
        return feetNumber * perFeetToMile;
    }
    return "negative feet number or string value can't possible to convert into mile please pass integer type of positive number";
}
console.log(feetToMile(1));

//2) Question : Calculate Amount of QbWood for furniture
// ------------------------------------------

//solution no. (2) :
function woodCalculator(chair, table, bed) {
    if (
        Number.isInteger(chair) &&
        Number.isInteger(table) &&
        Number.isInteger(bed)
    ) {
        if (chair >= 0 && table >= 0 && bed >= 0) {
            const perChairQbWood = 1;
            const perTableQbWood = 3;
            const perBedQbWood = 5;

            let result =
                chair * perChairQbWood +
                table * perTableQbWood +
                bed * perBedQbWood;

            return result + " QB Woods Need";
        }
    }
    return "Please Give all Element value as a integer type of positive number";
}

console.log(woodCalculator(0, 1, 1));

//3) Question : Calculate Brick Numbers for Building.
// ------------------------------------------

//solution no. (3) :

function brickCalculator(buildingFloorNumber) {
    if (buildingFloorNumber >= 0 && Number.isInteger(buildingFloorNumber)) {
        const perFeetToBrick = 1000;
        let totalFeet = 0;
        for (let i = 1; i <= buildingFloorNumber; i++) {
            if (i <= 10) {
                totalFeet = totalFeet + 15;
            } else if (i <= 20) {
                totalFeet = totalFeet + 12;
            } else {
                totalFeet = totalFeet + 10;
            }
        }

        let result = totalFeet * perFeetToBrick;

        return result + " Bricks Need To Make This Building";
    }
    return "please give building floor number as a integer type of positive value";
}

console.log(brickCalculator(23));

//4) Question : Find Shortage friend name from your friend Group.
// ------------------------------------------

//solution no. (4) :

function tinyFriend(friendNames) {
    let arr = friendNames;

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i]) || arr[i] === "") {
                return "Please give your all friends name properly";
            }
        }
        return arr.reduce(function (a, b) {
            return a.length <= b.length ? a : b;
        });
    }

    return "Please give your friends name as an array";
}

console.log(tinyFriend(["raju", "Shuvo", "kajol"]));

// প্রাকটিস চ্যালেঞ্জ-৩ টা:

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(year) {
    return year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)
        ? `${year} is a Leap Year`
        : `${year} is not a Leap Year`;
}

console.log(leapYear(2100));

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function ageEvenOrOdd(age) {
    return age % 2 === 0 ? true : false;
}
console.log(ageEvenOrOdd(24));

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
function hourToMinute(hour) {
    return hour * 60; //for minutes
    return hour * 60 * 60; //for second
}
console.log(hourToMinute(24));

//*)Programming hero solving End

//*)Array filter Method Implements
/* 
1)function banabo array and cb param diye 
2)array ta loop krbo 
3)filter jehetu array return kore tai newArray te push krte hobe 
4)Loop Caliye value gulo callback call kore pass korbo bar bar 
5)callback return true dibo amdr condition anujai and 
6)true callback paile seta check krb and true hole value push korbo 
7)last e newArray ta return kore dibo 
*/

function myFilter(myArray, cb) {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        let callBackResult = cb(myArray[i], i, myArray);
        if (callBackResult === true) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

console.log(
    myFilter([2, 3, 4, 4, 5], (v) => {
        return v > 3;
    })
);

//*)Array Map Method Implements
/* 
1)function banabo array and cb diye 
2)loop krbo function ta 
3)new Array banabo and cb diye loop theke value gulo pass kore dibo 
4)protibar loop gurle tar bitor new modified value return krbo callback return catch er upor 
5)callback tare push kore dibo new er bitor 
6)loop er bahir theke newArray return kre dibo 
*/

function Map(array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i], i, array));
    }

    return newArray;
}

let myMapArray = Map([23, 3, 4, 5, 4], (value) => {
    return value + 2;
});

console.log(myMapArray);

//*)Array Foreach Method Implement
/* 
1)function banabo array and cb diye 
2)loop krbo and cb diye loop theke value gulo pathabo 
3)definition callback theke ekhn ja likhar likhbo 
*/

let sum = 0;
function myForeach(myArray, cb) {
    for (let i = 0; i < myArray.length; i++) {
        cb(myArray[i], i, myArray);
    }
}

console.log(
    myForeach([2, 3, 4, 5, 6, 54, 4], (v, index, arr) => {
        sum = sum + v;
    })
);

console.log(sum);

//*)Array Find and FindIndex Method Implements
/* 
1)function create kore array and cb param diye 
2)array ta loop korbo 
3)loop theke array value/index(opt:index,arr) pass kore dibo 
4)callback theke condition kore true return krbo 
5)callback catch jodi first time true korte pare taholei setar value/index return kre dibo and function sekhanei stop
*/

function myFind(myArray, cb) {
    for (let i = 0; i < myArray.length; i++) {
        let callBackResult = cb(myArray[i], i, myArray);
        if (callBackResult) {
            // return myArray[i];
            // return i; for findIndex
        }
    }
}
console.log(
    myFind([23, 3, 4, 5, 6, 4, 5, 4], (v) => {
        return v > 10;
    })
);

//Even and Odd Number Collecting
let Number = 10;
function EvenOddCheck(Number) {
    if (isNaN(Number)) {
        return "please give a number value";
    } else {
        //ei else na dileo hobe
        if (Number % 2 === 0) {
            return `${Number} is a Even Number`;
        } else {
            return `${Number} is a Odd Number`;
        }
        /* 
        else bad diye shudu return o krte partam 
        */

        return Number % 2 === 0 ? "Even Number" : "Odd Number";
        let Result = Number % 2 === 0 ? "Even Number" : "Odd Number";
        return Result;
    }
}
EvenOddCheck(Number);

//Multiplication of Number to 1-10;
function multiplicationToTen(number) {
    let Result = "";

    for (let i = 1; i <= 10; i++) {
        // Result +=`${i} * ${number} = ${i*number} `;
        console.log(`${i} * ${number} = ${i * number} `);
    }
    // return Result;
    return ""; //undefine na dekha tar jonno "";
}

console.log(multiplicationToTen(2));

// Day checking
/* 
new Date theke getDay ber kore 0 hole ki onno hole ki eita dekhabo ,
*/
let Day = "Sunday"; //Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
switch (Day.toLocaleLowerCase()) {
    case "sunday":
        // case 'monday': //we can use multi value
        console.log("Date: Sunday");
        break;
    case "monday":
        console.log("Date: monday");
        break;
    case "wednesday":
        console.log("Date: wednesday");
        break;
    case "thursday":
        console.log("Date: thursday");
        break;
    case "friday":
        console.log("Date: friday");
        break;
    case "saturday":
        console.log("Date: saturday");
        break;
    default:
        console.log("please give proper value");
}

// Ternary oparator trick

let simpleTer = true ? "getValue" : "Setvalue";

let result = false
    ? "1st time false"
    : false
    ? "2nd time true"
    : true
    ? "4nd time true"
    : "3rd time true";

console.log(result);

let TerResult =
    5 < 2
        ? "5 greater than 2"
        : 5 > 2
        ? "true found"
        : true
        ? "another found true"
        : "defalut found true";

console.log(TerResult);

//Alternative
let isRunning = true;
while (isRunning) {
    let Rand = Math.ceil(Math.random() * 5);
    console.log(Rand);
    if (Rand === 4) {
        console.log("Winner Winner Chicken Dinner");
        isRunning = false;
    }
}

//With Brack Statement
while (true) {
    let Rand = Math.ceil(Math.random() * 5);
    console.log(Rand);
    if (Rand === 4) {
        console.log("Winner Winner Chicken Dinner");
        break;
    }
}

//*)Pattern of loop

//Loop Run by Iterator
for (let i = 1; i <= 5; i++) {
    let Result = "";
    for (let j = 1; j <= i; j++) {
        Result += j;
    }
    console.log(Result);
}
// 1
// 12
// 123
// 1234
// 12345

//Greater than krte hobe loop and dcreement krte hobe
// 5
// 54
// 543
// 5432
// 54321

for (let i = 1; i <= 5; i++) {
    let Result = "";
    for (let j = 1; j <= 5; j++) {
        Result += "*";
    }
    console.log(Result);
}
// *****
// *****
// *****
// *****
// *****

//String Length Method Implement
/* 
string te iterate krbo 
2)if last length ===""; break kre dibo 
3)length ta 1 kore barabo 
*/

let StringLength = "Arfan khan";
console.log(StringLength.charAt(11) === "");
let length = 0;
while (true) {
    if (StringLength.charAt(length) === "") {
        break;
    }
    length++;
}

console.log(length);

//Factorial Calculation 4,3,2,1 = 24;
/*
 *)make a funciton with num pare,
 *)run a loop of num times ,
 *)multipication everytime and store the value
 *)after loop return the Result
 */
function factorial(num) {
    let Result = 1;
    for (let i = 1; i <= num; i++) {
        Result = i * Result;
    }
    return Result;
}

console.log(factorial(4));

//Factorial by a Decrementer loop;

// 4 = 4*3*2*1 ; 24;

function FactorialDecree(num) {
    let Result = 1;
    for (let i = num; i >= 1; i--) {
        Result *= i;
    }
    return Result;
}

console.log(FactorialDecree(4));

//Data found from Array,

const arr = [3, 32, 43, 5, 6];
let Find = 5;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Find) {
        console.log("Data Found in" + i + "Index");
        isFound = true;
        break;
    }
}

if (!isFound) {
    console.log("data not found");
}

// প্রাকটিস প্রব্লেম- ৫ খানা

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।
/* 
1)array ta sort krbo lower order e and first index ta pathiye dibo 
*/

function smallNumberFromArray(arr) {
    if (Array.isArray(arr)) {
        let Result = arr.sort((a, b) => {
            return a - b;
        })[0];
        return Result;
    }
    return "Please give an Array Parameter";
}

console.log(smallNumberFromArray([2, 3, 4, 0, 1, 100]));

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

function findLowerNumber(num1, num2, num3) {
    if (
        typeof num1 === "number" &&
        typeof num2 === "number" &&
        typeof num3 == "number"
    ) {
        //solving by using build IN method of Math Object
        return Math.min(num1, num2, num3);

        //Solving by using conditions
        return num1 < num2 && num1 < num3
            ? num1
            : num2 < num1 && num2 < num3
            ? num2
            : num3;
    }
    return "please give a number for all parameters";
}

console.log(findLowerNumber(2, 3, 4));

// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।
/* 
1)chekcing is array,
2)checking all the is number by looping or every methods 
3)sum all the array and divide by their length 
*/

function avgOfArray(arr) {
    if (Array.isArray(arr)) {
        let isAllNum = arr.every((v) => {
            return typeof v === "number";
        });
        if (!isAllNum) {
            return "pleas give all the value of array as a number";
        }
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result / arr.length;
    }

    return "please give an array parameter";
}

console.log(avgOfArray([4, 4, 4, 4]));

// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

function areaCalculate(width, height) {
    if (typeof width === "number" && typeof height === "number") {
        return width * height;
    }
    return "function parameter must be in number type";
}

console.log(areaCalculate(2, 2));

// ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

function secondLargestNumber(arr) {
    if (Array.isArray(arr)) {
        let isAllNum = arr.every((v) => {
            return typeof v === "number";
        });
        return isAllNum
            ? arr.sort((a, b) => {
                  return b - a;
              })[1]
            : "please give all array value as a number";
    }
    return "function argument must be array type";
}

console.log(secondLargestNumber([2, 1, 6, 3, 4, 5]));

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

/* 
emn ekta number jte 1 bar tar nijer songka dara bag jai jor ekta 2,
*/

function primeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return "yes it is a prime number";
}
console.log(primeNumber(7));

//Finding Uniq Value form array element
function uniqArray(arr) {
    let uniqArray = [];
    for (let elem of arr) {
        if (uniqArray.indexOf(elem) == -1) {
            uniqArray.push(elem);
        }
    }
    return uniqArray;
}

console.log(uniqArray(["arfan", "shuvo", "arfan"]));

//Reveseing String value
function reverseString(str) {
    let reverse = "";
    for (const elem of str) {
        reverse = elem + reverse;
    }

    return reverse;
}

console.log(reverseString("arfan khan"));

//Lowest Phone Price Getting
function lowestPricePhone(phones) {
    let lowestPricePhone = phones[0].price;
    let lowestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        if (lowestPricePhone > phones[i].price) {
            lowestPricePhone = phones[i].price;
            lowestPhone = phones[i];
        }
    }
    return lowestPhone;
}

let phones = [{ price: 50,quantity:4 }, { price: 80,quantity:2 }, { price: 500,quantity:1 }];
console.log(lowestPricePhone(phones));



//Lowest Phone Price Getting
function lowestPricePhone(phones) {
  let cheapestPhone = phones[0];

  for(const phone of phones){
    if(phone.price < cheapestPhone.price){
      cheapestPhone = phone;
    }
  }
  return cheapestPhone;
}

let phones = [{ price: 19 }, { price: 10 }, { price: 500 }];
console.log(lowestPricePhone(phones));


//Totla Product Price by quantities 
function totalProductPrice(phones){
  let totalProductPrice = 0;
  for(const phone of phones){
    totalProductPrice = totalProductPrice + (phone.price* phone.quantity);

  }
  return totalProductPrice;
}

let phones = [{ price: 50,quantity:4 }, { price: 80,quantity:2 }, { price: 500,quantity:1 }];
console.log(totalProductPrice(phones));



//Animal Count by traveling miles 
function animalCount(miles){
  let count = 0;
  for(let i = 1; i<=miles; i++){
    if(i<=10){
      count+=10;
    }else if(i<=20){
      count +=15;
    }else{
      count+=20;
    }
  }
  return count;
}

console.log(animalCount(21));
