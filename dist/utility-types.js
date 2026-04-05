"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = [
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
    const userFound = User.find((user) => user.id === id);
    if (!userFound) {
        console.error("No user Found...");
        return;
    }
    Object.assign(userFound, updatedUser);
    return userFound;
}
console.log(fetchUpdatedUser(1, { username: "miqd2d" }));
//# sourceMappingURL=utility-types.js.map