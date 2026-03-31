"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type narrowing examples in TypeScript
// Example 1: Type Guard with typeof
function accessValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
let value = 20;
accessValue(value);
let value2 = "Miqdad";
accessValue(value2);
// Example 2: Type Guard with instanceof
class Student {
    scream() {
        return 'I am in school...';
    }
}
class Adult {
    shout() {
        return "I am at work...";
    }
}
function speaker(obj) {
    if (obj instanceof Student) {
        return obj.scream();
    }
    else if (obj instanceof Adult) {
        return obj.shout();
    }
}
let stu1 = new Student;
let adult1 = new Adult;
console.log(speaker(stu1));
console.log(speaker(adult1));
//# sourceMappingURL=typeNarrowing.js.map