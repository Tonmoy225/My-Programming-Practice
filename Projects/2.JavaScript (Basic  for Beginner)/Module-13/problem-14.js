// Problem-14 : You are given object containing information about a student ;

//-----task ------------------

// print all keys 

// print all values 

// print each key- value pair 
//    name : tonmoy ,
//    age : 22 ,
//    university : DIU,
//    department : CSE

// count the total number of the properties in the object ,
// check if the objection contains a property named "emails"

// -- Expaecred input : 
// const student = {
// name: tonmoy,
// age:22,
// univeristy:DIU,
// department:"CSE"
// }



// let student = {
//     name : "Tonmoy",
//     age : 25,
//     university : "DIU",
//     department : 'CSE'

// };

// function objOperation(obj){

//     for(let key in obj){
//         console.log(key);
//     }

//     for(let key of obj){
//         console.log(obj[key]);
//     }

//     for(let key of obj){
//         console.log(key , ":", obj[key]);
//     }

//     let objKeyCount = Object.keys(obj).length;    //[name,age,university]
//     console.log("Total Property : ",objKeyCount);

//     let hasEmailProperty = obj.hasOwnProperty("email");

//     console.log(hasEmailProperty);

//     return;

    
// }
// const store = objOperation(student);
// console.log(store);




// Problem-14 : You are given an object containing information about a student.

let student = {
    name: "Tonmoy",
    age: 25,
    university: "DIU",
    department: "CSE"
};

function objOperation(obj) {

    // Print all keys
    console.log("Keys:");
    for (let key in obj) {
        console.log(key);
    }

    // Print all values
    console.log("\nValues:");
    for (let key in obj) {
        console.log(obj[key]);
    }

    // Print each key-value pair
    console.log("\nKey-Value Pairs:");
    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }

    // Count total properties
    let objKeyCount = Object.keys(obj).length;
    console.log("\nTotal Properties:", objKeyCount);

    // Check if "emails" property exists
    let hasEmailProperty = obj.hasOwnProperty("emails");
    console.log("Contains 'emails' property:", hasEmailProperty);
}

objOperation(student);