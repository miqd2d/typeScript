type User = {
    id : number,
    username : string,
    role : "admin" | "customer" | "employee"
}

// type UpdatedUser = {
//     id? : number,
//     username? : string,
//     role? : "admin" | "customer" | "employee"
// }

// Instead of using the above code you can simply use Partials
type UpdatedUser = Partial<User>;           // This one keyword makes all the fields of User optional

const User : User[] = [
    {
        id : 1,
        username : "miqdad123",
        role : "admin"
    },
    {
        id : 2,
        username : "ali123",
        role : "customer"
    },
    {
        id : 3,
        username : "sara123",
        role : "employee"
    },
    {
        id : 4,
        username : "john123",
        role : "customer"
    }
]

function fetchUpdatedUser(id : number, updatedUser : UpdatedUser){
    const userFound = User.find((user)=> user.id === id);
    if(!userFound){
        console.error("No user Found...");
        return;
    }
    Object.assign(userFound, updatedUser);
    return userFound;
}

console.log(fetchUpdatedUser(1,{username : "miqd2d"}));

