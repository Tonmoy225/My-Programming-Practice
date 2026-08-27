/* 
Problem 5 — Student Result Analyzer
Concepts: nested arrays, object types, reduce(), return object types, conditional logic
Function name must be: getStudentResult
Scenario
A school stores the marks of each student in an array. Teachers want a quick summary containing the student's name, average mark, and whether the student passed or failed. A student is considered passed if their average mark is at least 40.
Student Structure
{
    name: string;
    marks: number[];
}
Task
Create a function named getStudentResult. The function should receive a student object, calculate the average of all marks, determine whether the student passed, and return a new object containing name, average, and result.
Edge Case
Think about what your function should do if the marks array is empty.
Starter Code
// TODO: define a type for a student
 
function getStudentResult(student: Student): <type> {
 
    // write your code here
 
}

*/

interface Student { // interface for student 
    name:string,
    marks: number[]
}

interface Result { // interface for return 
    name: string
    average: number
    result: string
}

const getStudentResult = (student:Student):Result => {

    const marks:number[] = student.marks

    const totalMarks:number = marks.reduce((sum:number, mark:number) => sum+mark, 0)

    const average:number = totalMarks/marks.length

    const result:string = average >=40 ? "Passed" : "Failed"  // Using ternary operator to check condition sort-cut



    return {
        name: student.name,
        average: average,
        result: result
    }



}


console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}
)
)