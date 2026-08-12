
/* 
Problem 1 : Add Grade to each Student (WithOut changing original )

you have an array of student objects, each with name and marks .
Create a NEW array where every student also has  a "grade   " field ,

based on their marks ,The Original array must stay exactly the same .



Grading rule : 

marks >= 90 -> "A+"
marks >= 80 -> "A"
marks >= 60 -> "B"
below 60    ->"Fail"


Input : [
{name  : "Istiar ", marks : 85},
{name: "Tonmoy", marks : 45}

]

Output(new array):
[
{name  : "Istiar ", marks : 85, grade : "A+"},
{name: "Tonmoy", marks : 45, grade: "Fail"}
] 

Original array must reamin untouch (no "grade " field  added to it ).

*/

console.log("================Problem : 1 =============================");


const addGrade = (students) => {
    

    // const students2 = [...students];

    // console.log(students2);

    // students[0].name = "Hadi";
    
    

    // Using map mathod to copy array and aslo iterate way : 

    const modifirdStudent = students.map(student =>{
        console.log(student,"student");

        // return {
        //     name : student.name,
        //     marks : student.marks,
        //     grade : "A+",
        // }
        const {name , marks} = student



        const newStudentWithGrade = {name : name ,marks : marks };

        if(marks >= 90 ){
            newStudentWithGrade.grade = "A+";
        }else if (marks >=80){
            newStudentWithGrade.grade = "A";
        }
        else if (marks >= 60){
            newStudentWithGrade.grade = "B"
        }
        else{
            newStudentWithGrade.grade = "Fail"
        }

         return newStudentWithGrade;

    })

    console.log(modifirdStudent,"modifiedStudent");
   return modifirdStudent ;
}


let students = [
    {name : "Tonmoy", roll : 5, marks:79},
    {name : "Istiar ", roll : 1, marks :95},
]

console.log(addGrade(students));
// console.log(students);



console.log("======================Problem -2 =================================");

/* 
Problem-2 : Cart Total calculator : 

You have an array of cart items ,each with name ,price ,and qty 

(quantity ). calculate : 
 1. the number of items in the cart (sum of all qty )
 2. Total cost (sum of price x qty for each  item )


 then print one final message using a template string :
 "total : X items , Y Taka "

 Input : [
 {name : "pen",prince: 100 , qty : 1},
 {name : "notebook", price :  100 , qty : 2} 
 ]

 output: 

 "Total : 3 items , 300 Taka"

 Bonus : if the cart is missing (null /undefined),dont crash - 
 print "total : 0 items , 0 Taka " instead .


*/


const cartCalculaor = (products) => {
    // return products;

    let totalItems = 0;
    let totalPrice = 0;

    // Traditional way : 
    for (let product of products){
        totalItems += product.qty;

        totalPrice +=(product.price * product.qty) ;
    }
    return `Total : ${totalItems ? totalItems : 0 } items , ${totalPrice ? totalPrice : 0} Taka `;  // Use chaning opaterator for true / false consition for short cut if-else
    // return `Total : ${totalItems | 0 } items , ${totalPrice | 0} Taka `;  // Use for more shortcut using OR |
}

const products = [
 {name : "pen",price: 100 , qty : 1},
 {name : "notebook", price :  100 , qty : 2} 
]

console.log(cartCalculaor(products));