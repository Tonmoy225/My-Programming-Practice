
// Normal in javascript way to declear object : 
// const user = {
//     name : 'tonmoy',
//     age : 20,
//     isAdmin : true,
// }

// const age = user.age;
// const name = user.name;

// // const {age , name } = {name : 'tonmoy', age : 30 , isAdmin : true }; // destructuring technique for object

// const {age,isAdmin} = user; // shortcut Destructuring 


let user : {name  : string , age : number , isAdmin : boolean } = {
    name : 'tonmoy',
    age : 20,
    isAdmin : true,
}

// const age = user.age;
// const name = user.name;

// const {age , name } = {name : 'tonmoy', age : 30 , isAdmin : true }; // destructuring technique for object


// const {age:userAge,isAdmin} = user; // here :userAge age could be rename the key of value 

const {age,isAdmin} = user; // when we destructuring here then we use only those keyword what is use in the object but array not be same here!


// Example Array distructuring : 

const userInfo = ['dalim kahi ', 25];

const [username , userage] = ['dalim kahi',25];  // here we use the any keyword to access the array key value in the new key value 







