/* 
Problem 1 — Cinema Ticket Counter
Concepts: function parameter types, return types, number, conditional logic
Function name must be: getTicketPrice

Scenario
A cinema is building a ticketing system. The ticket price depends on the customer's age because children and senior citizens receive special pricing. You are responsible for creating the function that determines how much a customer should pay for a single ticket.

Task
Create a function named getTicketPrice. The function should receive the customer's age and return the appropriate ticket price.

Pricing Rules
Age  :     Ticket Price:
Below 5        0
5–12          100
13–59         200
60 or above   120

A child younger than 5 years old can enter for free.

Function Requirement:
-Accept the age as a number.
-Return the ticket price as a number.
-Correctly handle all age ranges.

*/


const getTicketPrice = (age:number):number => {

    if(age < 5) {
        return 0
    } else if(age >= 5 && age <=12) {
        return 100
    } else if(age >= 13 && age <=59) {
        return 200
    }

    return 120 // no need use else, return alternative condition
 
}
console.log(getTicketPrice(3))
console.log(getTicketPrice(10))
console.log(getTicketPrice(25))
console.log(getTicketPrice(65))