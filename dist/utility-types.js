"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentID = 5;
const Users = [
    {
        id: 1,
        username: "miqdad123",
        role: "admin"
    },
    {
        id: 2,
        username: "ali123",
        role: "customer"
    },
    {
        id: 3,
        username: "sara123",
        role: "employee"
    },
    {
        id: 4,
        username: "john123",
        role: "customer"
    }
];
function fetchUpdatedUser(id, updatedUser) {
    const userFound = Users.find((user) => user.id === id);
    if (!userFound) {
        console.error("No user Found...");
        return;
    }
    Object.assign(userFound, updatedUser);
    return userFound;
}
/*
Create a new function addNewUser() that takes in the new user object without ID
1. Create a new user object adn assign it an ID
2. Spread in all the properties of the user in the object
3. Set a type for this user
4. Push the object in the User array and return the new user created
*/
function addNewUser(newUser) {
    const newCreatedUser = { id: currentID++, ...newUser };
    Users.push(newCreatedUser);
    return newCreatedUser;
}
console.log(fetchUpdatedUser(1, { username: "miqd2d" }));
console.log(addNewUser({ username: "miqdad", role: "customer" }));
console.log("All users : ", Users);
//# sourceMappingURL=utility-types.js.map