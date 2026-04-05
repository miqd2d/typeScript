// Understanding typescript using a pizza app

type Pizza = {
    id: number
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}


const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 10 },
    { id: 2, name: "Chicken", price: 8 },
    { id: 3, name: "Pepperoni", price: 12 },
    { id: 4, name: "Veg", price: 5 },
]

let cashInRegister: number = 100;
let newOrderId: number = 1;
let nextPizzaId: number = 5;
const orderQueue: Order[] = [];

// First task is to create an utility function named "addNewPizza" that takes a pizza object and adds it to the menu

const addNewPizza = (pizzaObject: Omit<Pizza, "id">): void => {
    menu.push({ id: nextPizzaId++, ...pizzaObject });
}

/* Second task is to write a utility function called placeOrder that takes in the pizza name as argument : 
1. finds the pizza object in the menu
2. Adds income to the register
3. Pushes new order in the orderQueue
4. returns the new object 
*/

function placeOrder(pizzaName: string): Pizza | undefined {
    // finds the pizza in the menu
    const pizzaFound: Pizza | undefined = menu.find((pizza) => {
        return pizzaName === pizza.name;
    })
    if (pizzaFound !== undefined) {
        // Adds income to the register
        cashInRegister += pizzaFound.price;
        // Pushes the order in the queue
        orderQueue.push({ id: newOrderId++, pizza: pizzaFound, status: "ordered" });
        // returns the new object for later
        return pizzaFound;
    }
    else {
        console.error("No Pizza found...")
        return;
    }
}

/* Write another utility function called completeOrder, that takes an orderId as parameter, 
finds the correct order in the queue and marks it as completed for good measure return the object
*/

function completeOrder(orderId: number): Order | undefined {
    // Find the order
    const pizzaFound = orderQueue.find((order) => {
        // change the order status to complete
        if (orderId === order.id) {
            order.status = "completed";
            return order;
        };
    })
    if (!pizzaFound) {
        console.error("Pizza not found");
    } else {
        return pizzaFound;
    }
}

/*
Create a utility function called getPizzaDetails, it will take in a parameter called identifier but there's a twist -> 
This identifier could either be of type string to accept pizza name
OR coul dbe of type number to accept the pizza id
*/

function getPizzaDetails(identifier: number | string): Pizza | undefined {
    // Working with pizza ID
    if (typeof (identifier) === "number") {
        const pizzaFound = menu.find((pizza) => {
            return pizza.id === identifier;
        })
        if (!pizzaFound || typeof (pizzaFound) === "undefined") {
            console.error("No such pizza exists");
        }
        else {
            return pizzaFound;
        }
    }
    // Working with pizza Name
    else if (typeof (identifier) === "string") {
        const pizzaFound = menu.find((pizza) => {
            return pizza.name.toLowerCase() === identifier.toLowerCase();
        })
        if (!pizzaFound || typeof (pizzaFound) === "undefined") {
            console.error("No such pizza exists");
        }
        else {
            return pizzaFound;
        }
    } else {
        throw new TypeError("Parameter `identifier` must be string or number")
    }
}

// After learning Generics -> Try and use it to add items to any array 
function addToArray<T>(array: T[], item: T) {
    array.push({ id: nextPizzaId++, ...item });
    return item;
}

addNewPizza({ name: "Chicken BBQ", price: 20 });
addNewPizza({ name: "Veggie BBQ", price: 14 });
addNewPizza({ name: "Chicken Alfredo Pizza", price: 30 });
addNewPizza({ name: "Veggie Supreme", price: 10 });

placeOrder("Chicken Alfredo Pizza");
placeOrder("Veggie Supreme");

console.log("\n--- Completing order ---");
console.log(completeOrder(1));
console.log(completeOrder(2));

console.log("\n--- Get pizza Details ---");
console.log(getPizzaDetails(1));
console.log(getPizzaDetails("Pepperoni"));

console.log("\n--- Generic Add to Array function ---");
console.log(addToArray<Pizza>(menu, {id: nextPizzaId++, name: "BBQ RANCH", price: 10 }));
console.log(addToArray<Order>(orderQueue, {id: newOrderId++, pizza:{id: 9, name: "BBQ RANCH", price: 10 } , status : "completed"}));
