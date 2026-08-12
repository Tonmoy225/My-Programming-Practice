// 14.2 : Brocken-Conditional (1) :

// function checkAdult (age){
//     if((age >= 18)){   // Here is a Error in equal Operator !(Logical Error)
//         return "Adult";
//     }
//     return "Minor";
// }
// console.log(checkAdult(19));


// 14.2: Broken Conditional (2 ):

function canApply(age,hasNID) {
    if(age >= 18 && hasNID){
        return "Eligible";
    }
    return "Not Eligible";
}

console.log(canApply(35,true));

//3rd Problem : 

function canAttendFinalExam (attendance , assignmentMark){

    if(attendance > 90 && assignmentMark >= 80 ){
        return "Eligible with Scholarship";
    }
    else if(attendance >= 80 && assignmentMark >= 50 ){
        return "Eligible for Final ";
    }
    else{
        return "Not Eligible";
    }
}
 
console.log(canAttendFinalExam(30,40));