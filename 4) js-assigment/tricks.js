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

// Multidimentional array looping

const arr = [
  [3, 4, 5, 6],
  [3, 4, 56, 6, 4],
  [3, 4, 67, 75, 4],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(`Index Of ${i}${j} = ${arr[i][j]}`);
  }
}

//Array Reversing

const arr = [23, 23, 3, 4, 5, 45, 4, 3, 4];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// Array which will reverse and sort

function ArrayReverseAndSort(arr) {
  let sortArray = arr.sort((a, b) => {
    b - a;
  });
  return sortArray;
}

console.log(ArrayReverseAndSort([3, 4, 5, 6, 7, 5, 4]));

//Array Reversing my Modified

const arr = [2, 3, 4, 5];

/* 
1)half count ghurabo and
2)temp copy nibo 
3)temp copy ta last index e set kore dibo 
4)1st index e last index value set kore dibo 
*/

for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log(arr);

//Array run with reference

const a = [2, 3];
let b = a;
b[0] = 5;
console.log(a);

//Array run with reference but copy

const a = [2, 3];
let b = Array.from(a);
// let b = [...a];
b[0] = 5;
console.log(a);
console.log(b);

//Object Looping all values

const person = {
  name: "arfan khan",
  phone: 324234,
  address: "72/1 sk-das Dhaka,Bangladesh",
  code: 54,
};

/*  for in / convert into array and iterated */

//for in
for (let index in person) {
  console.log(index, ":", person[index]);
}

let ArrayPersonValue = Object.values(person);
let ArrayPersonKeys = Object.keys(person);
let ArrayPersonObjectArray = Object.entries(person);
console.log(ArrayPersonValue);
console.log(ArrayPersonKeys);
console.log(ArrayPersonObjectArray);


// coding debugg tricks in problem solving  
/* 
console.log(a,b,c); multi value in single console,
line by line console log krbo 
debugger tools in vs code ;
var gulo watch e catch kore dekhbo 
google e search krbo related problems,
j releted problem ter build in method gulo ekbar chock dibo like array input hole array releted method gulo dekhbo and output ja dite hobe tar method gulo dekhbo 
if,loop, true kore kichu hole false kore chack krbo 
*/

