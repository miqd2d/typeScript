// Code for generics in typescript
const numericArray = [1,2,3,4,5];
const stringArray = ["a","b","c","d"];
const objectArray = [{id : 1} , {id : 2} , {id : 3}];

// We can create a function to get the last element of an array 
function getLastElementFromArray <T> (arr : T[]) : T | undefined{
    return arr[arr.length - 1];
}
console.log(getLastElementFromArray(numericArray));
console.log(getLastElementFromArray(stringArray));
console.log(getLastElementFromArray(objectArray));