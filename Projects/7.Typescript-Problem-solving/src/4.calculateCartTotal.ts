/* 
Problem 4 — Shopping Cart Calculator
Concepts: object types, array types, reduce(), function parameter and return types
Function name must be: calculateCartTotal
Scenario
An online shopping website stores each item in a customer's cart as an object containing its name and price. The store needs a function that calculates the total price of all products currently in the cart.
Product Structure
{
    name: string;
    price: number;
}
Task
Create a function named calculateCartTotal. The function should receive an array of products and return the total price.
Requirements
Properly type the product object.
Properly type the array of products.
Return the total as a number.
An empty cart should return 0.

*/



type Product = {
    name: string
    price: number
}

const calculateCartTotal = (products:Product[]):number => {

    const total:number = products.reduce((sum:number, item:Product) => sum + item.price, 0)

    return total


}

const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];

const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];


console.log(calculateCartTotal(products2))