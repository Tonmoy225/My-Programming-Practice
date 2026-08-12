// Normal Function

// function sayGreet(name) {
//     return `Hello ${name}`;
// }
// console.log(sayGreet("Tonmoy"));

// Arrow Function

// type 1

const sayGreet = (name) => {
    return `Hello ${name},Good Morning`; // we can use this type when we have more than one line of code in the function body. 


}
console.log(sayGreet("Tonmoy"));


// type 2

const sayGreets = (name) => `Hello ${name},Good Morning type 2`;  // we can use this type when we have only one line of code in the function body.  



console.log(sayGreets("Tonmoy"));





const student = {
    name : "Tonmoy",
    ids : 12345,
   
    shownName : function() {
         console.log(this);
        return this.name;
    },
    showAge : () => {
        console.log(this);
        return `Age: ${this.age}`;
    }

}

console.log(student.shownName());


