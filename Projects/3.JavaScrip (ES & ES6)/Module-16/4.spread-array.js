

let arr = [1,2,3,4,5];

console.log(...arr);


let maxNumber = Math.max(...arr);

console.log(maxNumber);


let arr2 = [...arr];

let arr3 = [...arr,2500,300];

console.log(arr2,arr3);



let student = {

    name : "Tonmoy",
    ids : 12345,
}

let students2 = student; // affect by key pair



let students3 = {...student,GPA: "5"};  // Not affect by added key pair;

students2.sm= 1344;

console.log(students2); 

console.log(students3);


// Rest Operator 

function sum (a,b,c,...restNumbers) {
   console.log(restNumbers,"Rest Numbers: ");

   let sum = 0;

   for (let i = 0; i < restNumbers.length; i++) {
       sum += restNumbers[i];
   }    

   return a+b+c+sum;
}

console.log("The sum is:",sum(1,2,3,4,5,6,7,8,9));