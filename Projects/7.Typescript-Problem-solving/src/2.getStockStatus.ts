/* 
Problem 2 — Store Inventory Status
Concepts: function types, number, string, conditional logic, boundary conditions
Function name must be: getStockStatus

Scenario :
An online store wants to show customers whether a product is available before they place an order. The inventory system stores the number of currently available units. Your job is to convert that number into a meaningful status message.
Task
Create a function named getStockStatus. The function receives the current stock quantity and returns a status string.
Status Rules
Stock            Status:
0               "Out of Stock"
1–5             "Almost Sold Out"
6–20            "Available"
More than 20    "In Stock"

Additional Requirement:

The function should return a string.

*/

const getStockStatus = (stock:number):string => {

    if(stock === 0) {
        return "Out of Stock"
    } else if(stock >=1 && stock <=5) {
        return "Almost Sold Out"
    } else if(stock >= 6 && stock <= 20) {
        return "Available"
    }


    return "In Stock"
}

console.log(getStockStatus(0))
console.log(getStockStatus(3))
console.log(getStockStatus(12))
console.log(getStockStatus(50))