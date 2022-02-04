//!Array Sovling Very Easy 
// Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// parseArray([]) ➞ []
// Notes
// Return [] if array is empty.

function parseArray(arr) {
	const newArray = [];
    for(let elem of arr){
        newArray.push(String(elem));
    }
    return newArray;

}

// console.log(parseArray([3,32,45,2]));

// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr) {
	// return arr.join('');
    // return arr.toString();

    let stringValue = "";
    for(let elem of arr){
        stringValue +=elem;
    }
    return stringValue;
}

// console.log(typeof arrayToString([34234,'arfan1']));

//! Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples

function arrayValuesTypes(arr) {
	let arrayTypes = [];
    for(let elem of arr){
        arrayTypes.push(typeof(elem));
    }
    return arrayTypes;
}

console.log(arrayValuesTypes([23,3,23,null,[],{}]));

// Concatenating Two Integer Arrays

function concat(arr1, arr2) {
	return [...arr1,...arr2];
    return arr1.concat(arr2);
}


function arrBetween(num1, num2, arr) {
	let findArray = [];
    for(let v of )
}