const person = {
    name : "Abul",
    profession : 'Teacher',
    age : 21 ,
    isSingle : true
}

const keys = Object.keys(person);
console.log(keys); // Show oNly Key on the Object 


const key = Object.values(person);
console.log(key);


/// Dekete Property from Object

delete person.isSingle;
delete person['profession'];
console.log(person);