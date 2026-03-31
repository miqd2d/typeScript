"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a function to verify if the obj is a contact
function checkIfContact(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.name === "string" &&
        typeof obj.number === "number");
}
// Creating a function that takes in contact as type
function printContact(con) {
    if (checkIfContact(con)) { // Cannot use typeof here , Will have to use the function
        return `${con.number} belongs to ${con.name}`;
    }
    return `Custom number : ${con}`;
}
const contact1 = {
    name: "Miqdad",
    number: 9358984153
};
const contact2 = {
    name: "Suraj",
    number: 9358984151
};
console.log(printContact(contact1));
console.log(printContact(contact2));
//# sourceMappingURL=ownTypes.js.map