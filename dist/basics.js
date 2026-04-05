"use strict";
// Understanding typescript using a pizza app
Object.defineProperty(exports, "__esModule", { value: true });
const menu = [
    { id: 1, name: "Margherita", price: 10 },
    { id: 2, name: "Chicken", price: 8 },
    { id: 3, name: "Pepperoni", price: 12 },
    { id: 4, name: "Veg", price: 5 },
];
let cashInRegister = 100;
let newOrderId = 1;
let nextPizzaId = 5;
const orderQueue = [];
// First task is to create an utility function named "addNewPizza" that takes a pizza object and adds it to the menu
const addNewPizza = (pizzaObject) => {
    menu.push({ id: nextPizzaId++, ...pizzaObject });
};
/* Second task is to write a utility function called placeOrder that takes in the pizza name as argument :
1. finds the pizza object in the menu
2. Adds income to the register
3. Pushes new order in the orderQueue
4. returns the new object
*/
function placeOrder(pizzaName) {
    // finds the pizza in the menu
    const pizzaFound = menu.find((pizza) => {
        return pizzaName === pizza.name;
    });
    if (pizzaFound !== undefined) {
        // Adds income to the register
        cashInRegister += pizzaFound.price;
        // Pushes the order in the queue
        orderQueue.push({ id: newOrderId++, pizza: pizzaFound, status: "ordered" });
        // returns the new object for later
        return pizzaFound;
    }
    else {
        console.error("No Pizza found...");
        return;
    }
}
/* Write another utility function called completeOrder, that takes an orderId as parameter,
finds the correct order in the queue and marks it as completed for good measure return the object
*/
function completeOrder(orderId) {
    // Find the order
    const pizzaFound = orderQueue.find((order) => {
        // change the order status to complete
        if (orderId === order.id) {
            order.status = "completed";
            return order;
        }
        ;
    });
    if (!pizzaFound) {
        console.error("Pizza not found");
    }
    else {
        return pizzaFound;
    }
}
/*
Create a utility function called getPizzaDetails, it will take in a parameter called identifier but there's a twist ->
This identifier could either be of type string to accept pizza name
OR coul dbe of type number to accept the pizza id
*/
function getPizzaDetails(identifier) {
    // Working with pizza ID
    if (typeof (identifier) === "number") {
        const pizzaFound = menu.find((pizza) => {
            return pizza.id === identifier;
        });
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
        });
        if (!pizzaFound || typeof (pizzaFound) === "undefined") {
            console.error("No such pizza exists");
        }
        else {
            return pizzaFound;
        }
    }
    else {
        throw new TypeError("Parameter `identifier` must be string or number");
    }
}
// After learning Generics -> Try and use it to add items to any array 
function addToArray(array, item) {
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
console.log(addToArray(menu, { id: nextPizzaId++, name: "BBQ RANCH", price: 10 }));
console.log(addToArray(orderQueue, { id: newOrderId++, pizza: { id: 9, name: "BBQ RANCH", price: 10 }, status: "completed" }));
//# sourceMappingURL=basics.js.map