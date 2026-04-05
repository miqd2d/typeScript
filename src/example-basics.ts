type Address = {
    city : string,
    country : string,
    pincode : number
}

type Person = {
    name : string,
    age : number,
    isStudent : boolean,
    address : Address
}

let person1 : Person  = {
    name : "Miqdad",
    age : 21,
    isStudent : true,
    address : {
        city : "Pune",
        country : "India",
        pincode : 411048
    }
}

let person2 : Person  = {
    name : "Ali",
    age : 22,
    isStudent : false,
    address : {
        city : "Mumbai",
        country : "India",
        pincode : 310098
    }
}

// Typing arrays
let people : Person[] = [person1, person2];