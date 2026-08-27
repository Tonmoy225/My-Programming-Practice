/* 
Problem 3 — Social Media Profile Formatter

Concepts: object types, type/interface, function parameter typing, return types, template literals

Function name must be: formatUserProfile

Scenario:
A social media application stores basic information about its users. The application needs a function that converts a user's structured data into a human-readable profile summary. A user contains name, age, and city.
Task
First define an appropriate TypeScript type or interface for the user. Then create a function named formatUserProfile. The function should receive a user object and return a formatted sentence.

Requirements :
-Accept a properly typed user object.
-Return a string.
-Use the values from the object rather than hard-coding the result.

*/

// type User = { // we can type or Interface ,not used both
//     name: string
//     age: number
//     city: string
// }

interface User {
 name: string
 age: number
 city: string
}

const formatUserProfile = (user:User):string => {
   
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`

}

console.log(formatUserProfile({
    name: "Faisal",
    age: 30,
    city: "Khulna"
}))