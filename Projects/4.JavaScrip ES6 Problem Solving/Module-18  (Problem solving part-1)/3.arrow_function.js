/* 
Problem-1 : Arrow Function with default perameter & Logic 

wtire an arrow function that calculates shipping cost based on order amoint . Free shipping if ammount >= 1000,
otherwise charge a default free 60 taka -

Example : calculateShipping (1200) -> "Free Shipping"

exmaple: calculateShipping (500) -> "Shipping fee 60 taka"

example : calaculateShipping (500,100) -> "Shipping free : 100 tk "
*/

console.log("=======================Problem : 1====================================");



const calculateShipping = (orderAmount,shippingFee) => {
    
    // // Traditional Way is Much Code : 
    // if(orderAmount>=1000){
    //     return "Free Shipping";
    // }
    // else{
    //     return `Shipping fee : ${shippingFee} Taka `;

    // }

   return orderAmount >= 1000 ?   "Free Shipping " : `Shipping fee : ${shippingFee} Taka`; // Here we use Return in beginnig the consition then no need to apply console log in the condition true or false , Besause of that is a function return in the Conditon 

     




}

console.log(calculateShipping(1200));





















console.log("======================Problem : 2======================================");


/* 
problem- 2 : Arrow Function with Multiple Conditions ,
Write an arrow function that assigns a grade based on marks .
90+ -> "A+",80-89 A , 60-79 B below 60 -> fail


Example: getGrade(95) -> "A+"
Example: getGrade(82) -> "A"
Example: getGrade(45) -> "Fail"
*/

const getGrade = (marks) => {

    // if(typeof marks != "number"){
    //     return "Invalid";
    // }


    // // Taditional ways :

    // if(marks >= 90){
    //     return "A+";
    // }else if(marks >=80 && marks < 90){
    //     return "A";
    // }
    // else if (marks >= 60 && marks < 80){
    //     return "B";
    // }
    // else if(marks < 60){
    //     return "Fail";
    // }

    // Using Ternary method to Solve to short cut

    return typeof marks != "number" ? "Invalid" : marks >= 90 ? "A+" : marks >= 80 ? "A" :  marks >=60 ? "B" : " Fails" // last conditon is Else Condition where no need to declear any Condition in last  after colon , just replace there a String or method ! 
};

console.log(getGrade(95));

console.log(getGrade(79));
console.log(getGrade(80));

console.log(getGrade(65));
console.log(getGrade(59));

console.log(getGrade(-5));

console.log(getGrade("Toss"));