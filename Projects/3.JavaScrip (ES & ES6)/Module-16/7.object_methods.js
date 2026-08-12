// Object methods : keys , values , entries , assign , freeze , seal , isFrozen , isSealed

const user = {
    name : "tonmoy",
    age : 24,
    id : 389
}

const keys = Object.keys(user);

const values = Object.values(user);

const entries = Object.entries(user);


// console.log(keys,values); // [ 'name', 'age', 'id' ] [ 'tonmoy', 24, 389 ]
   

console.log(entries); // [ [ 'name', 'tonmoy' ], [ 'age', 24 ], [ 'id', 389 ] ]



// Here we can use disturcture to get the key and value from the entries array and using for loop 
for (const elem of entries){
    const [key,value] = elem; // Distructuring the array to get key and value usign for loop    
    console.log(key,value);
}


// Delete method using delete keyword;

delete user.id; // delete the id property from the user object

console.log(user); // { name: 'tonmoy', age: 24 }  // id property is deleted from the user object   



// Seal and freeze method using Object.seal() and Object.freeze()


const bankAccount = {
    name : "tonmoy",
    accuntNumber : 123456789,
    balance : 500000000000000000

}

Object.seal(bankAccount); // Seal the bankAccount object


bankAccount.nomineName = "Someone"; // This will not add the nomineName property to the bankAccount object because the object is sealed

delete bankAccount.balance; // This will not delete the balance property from the bankAccount object because the object is sealed


bankAccount.balance = 1000000000000000000; // This will update the balance property of the bankAccount object because the object is sealed
console.log(bankAccount); // { accuntNumber: 123456789, balance: 500000000000000000 } // balance property is not deleted from the bankAccount object because the object is sealed




// freeze

const birthday = {
    name : "tonmoy",
    date : "01-01-2000"
}

Object.freeze(birthday); // Freeze the birthday object

delete birthday.date; // This will not delete the date property from the birthday object because the object is frozen

birthday.date = "02-02-2000"; // This will not update the date property of the birthday object because the object is frozen     

birthday.new = "test";

console.log(birthday); // { name: 'tonmoy', date: '01-01-2000' } // date property is not deleted from the birthday object because the object is frozen