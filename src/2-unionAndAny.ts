// Union in typescript allows you to define a variable that can hold multiple types of values.

let name : String | boolean;
name = "Miqdad";
console.log(name);
name = true;
console.log(name);


// The 'any' type in TypeScript allows a variable to hold any type of value, and it disables type checking for that variable.

let nameAny;                  // let nameAny : any;   -> Not advisable to perform
nameAny = "miqdad";
console.log(nameAny);
nameAny = 21;
console.log(nameAny);
nameAny = true;
console.log(nameAny);