

//Distructuring for array :

const numbers = [10,20,30,40,50];

const [ten, twenty, , , fifty] = numbers;

console.log(ten,twenty, fifty);      // 10 20 50 will print ;



// Destructuring for object :

const student = {
    name : "Tonmoy",
    age : 25,
    roll : 32,
    marks : {
        math : 90,
        english : 80
    }
}

// const {name , age} = student;

// const {age , name:fullname} = student;  // we can also rename the variable name while destructuring.

const {age , name: fullname,marks: {math}} = student;  // we can also rename the variable name while destructuring. and choose which perameter we want to destructure from the object.

// console.log(student.name , student.age);  // Tonmoy 25

// console.log(name , age);  // Tonmoy 25
console.log(fullname , age, math);  // Tonmoy 25 90 




