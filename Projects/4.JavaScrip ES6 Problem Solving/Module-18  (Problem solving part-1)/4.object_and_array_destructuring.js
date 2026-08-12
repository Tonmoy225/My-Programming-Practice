/* 

Problem - 1 : Nested response Extractor -

Extract specific Fields from a nested API - like response object
 using destructureing ,with renameing + default value .

 Example : {User : {name : " Rafi ", age : 22 }} -> extract name as username ,
 deafult age = 18 if missing ;


 


*/

console.log("=====================Problem : 1=================================");

const responseExtractor = (obj) => {

    const {user :{name : userName , age = 18 }} = obj;   // Object destructureing for nested Object:
    console.log( userName , age);

    return {
        userName,age 
    }
}

console.log(responseExtractor({user : {name : "tonmoy" , age : 22}})); // here given value is both name and  age  


console.log(responseExtractor({user : {name : "tonmoy" , }})); // with given age value then we see the default Value  what we set in code !




console.log("==================Problem : 2 ============================================");


/* 
Problem - 2 : Swap and Rest Extractor :

Swap two varialbes and extract first / rest elements form an array using destructuring , No temp Variable ;

Example : [ a , b ] = [b , a];

Example : [first ,...rest ] = [10,20,30,40]  -> first = 10 , rest = [20,30,40]
*/

// Using Destructing Method to easily solve the Swaping function : 

let a = 5 ;
let b = 10; 

[b,a] = [a,b]  // using array destructureing method for swaping  but if we do it traditional way then we need a "Temp valiable to store a value then swaping ", but this shortcut is easy way in javsript .


console.log(a,b);


// 2nd Example : 

let nums = [10,20,30,40,50];

let [first , ...rest ] = nums   // arrays destructuring to separate first and rest array


console.log(first,rest);
