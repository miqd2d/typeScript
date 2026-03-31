// Forcefull type ascertion
let response : any = "42";
let numericLength : number = (response as string).length;
console.log(numericLength);    //  output -> 2

// Another example with book type
type Book = {
    name : string
}

let bookString = '{"name" : "One of the best in the world"}'    // Taking from localStorage
let bookObject = ((JSON.parse(bookString)) as Book);
console.log(bookObject.name);


// Can also get HTML tag types when working with DOM elements
let inputVal = document.getElementById("usernameInput") as HTMLInputElement;

// Importance of unknown
let value : unknown;
value = "miqdad";
value = 41;
value = true;
// value.toUpperCase();     // Will throw an error

// How types are used in try-catch
try{
    // something something
}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("error : ",error);
}


// Use of never as a type 
type Role = "admin" | "user";

function redirectBasedOnRole(role : Role) : void{
    if(role === "admin"){
        console.log("Redirecting to Admin page...");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to User page...");
        return;
    }
    role;   // Will show as never as all the options are exhausted
}