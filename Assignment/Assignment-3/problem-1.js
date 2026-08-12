
function studentIntroduction(student) {

    // Write your code here

    if(typeof student !== "object" || student === null || Array.isArray(student)){
        return "Invalid";
    }

    else if (student?.name === undefined || student?.age===undefined || student?.course === undefined){
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}