

const user = {
    name : "tonmoy",
    age : 24,
    id : 389,
     "my_adress" : "Rajshahi",
    somethings : [20,30,40,50],

    company : {
        name : "ABC Corp",

        address : {
            city : "Dhaka",
            country : "Bangladesh"

        },
       
        position : "Software Engineer",

        
    }
}

// Object ar Property access property : Dot Notation and Bracket Notation

 console.log(user.name); // Dot Notation


 const key = `id`;
 console.log(user[key]); // Bracket Notation  

 console.log(user["my_adress"]); // Bracket Notation



 // optional Chaning (?.) : optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each property in the chain exists. If any property in the chain is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.


 console.log(user.company.address.city); // Dhaka

 console.log(user.company?.address?.city); // Dhaka

console.log(user.company?.address?.zipCode); // undefined




//object loop :

for(let key in user){
    console.log(key, user[key]); // show all key and value of user object. Here using bracket notation only but not support dot Notation because key is a variable.
    
}
