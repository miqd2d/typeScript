"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Forcefull type ascertion
let response = "42";
let numericLength = response.length;
console.log(numericLength); //  output -> 2
let bookString = '{"name" : "One of the best in the world"}'; // Taking from localStorage
let bookObject = (JSON.parse(bookString));
console.log(bookObject.name);
// Can also get HTML tag types when working with DOM elements
let inputVal = document.getElementById("usernameInput");
// Importance of unknown
let value;
value = "miqdad";
value = 41;
value = true;
// value.toUpperCase();     // Will throw an error
// How types are used in try-catch
try {
    // something something
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error : ", error);
}
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to Admin page...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to User page...");
        return;
    }
    role; // Will show as never as all the options are exhausted
}
//# sourceMappingURL=5-moreTypes.js.map