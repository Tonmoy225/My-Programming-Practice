

/*

Problem - 1 : Most Expensive Product :

Give an Object of product prices , use Object.keys() or Object.entries() + loop to 

find the most expensive product ,


exsmple : {pen : 20 , book : 150 , bag : 500 } -> "bag" 

*/

console.log("========================problem : 1 =======================================");

const getMostExpensiveProduct = (product) => {

    const keys = Object.keys(product); // Type -1 to find the keys from array 
    console.log(keys);

    // const entries = Object.entries(product); // Not most useable 
    // console.log(entries)
    
    let heigest = 0;

    let expensiveProductName = "";


    for(let key of keys ){

        if(heigest < product[key]){
           heigest = product[key]; 

           expensiveProductName = key;
        }
        console.log(heigest,expensiveProductName);
        // console.log(key,product[key]);
    }
    return "heigest Product Price  " + heigest +"->"+ expensiveProductName;



}
console.log(getMostExpensiveProduct({pen : 20 , book : 150 , bag : 500 ,pencil : 100 , box : 750 }));

















console.log("===============================Problem : 2 ============================");


/* 
problem - 2 : Safe nested Access ;

Safely access deeply nested optional data using ?. and ?? without 


*/

let user1 = {
    name : "Istiar",
    address : {
        city : "Rajshahi"
    }
}

let user2 = {
    name : "Tonmoy",
    address : null,
}

const getCity = (user) => {
    return user.address?.city;  // here use ? Optional chain to  skip the Undefined when the variable not found in the Object inner or inner nested object then.
};

console.log(getCity(user1));

console.log(getCity(user2));


