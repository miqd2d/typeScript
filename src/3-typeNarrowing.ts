// Type narrowing examples in TypeScript
// Example 1: Type Guard with typeof
function accessValue (value : String | number){
    if ( typeof value === "string" ){
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

let value : number = 20;
accessValue(value);
let value2 : string = "Miqdad";
accessValue(value2);


// Example 2: Type Guard with instanceof
class Student{
    scream(){
        return 'I am in school...'
    }
}
class Adult{
    shout(){
        return "I am at work..."
    }
}

function speaker(obj : Student | Adult){
    if(obj instanceof Student){
        return obj.scream();
    }
    else if (obj instanceof Adult){
        return obj.shout();
    }
}

let stu1 = new Student;
let adult1 = new Adult;

console.log(speaker(stu1));
console.log(speaker(adult1));

