
// Thinking in a object way : 

/* 
Loose papers, or one folder
Think about your own admission paperwork. Your name on one slip, your roll on another, your marks on a third, your photo somewhere in your bag.

Nothing is wrong with that. Every piece of information exists. But the moment somebody says "pass me your file", you are in trouble — there is no file. There are five loose papers you have to gather and hope you did not miss one.

Now picture the same five papers in a single folder with your name on it. "Pass me your file" becomes one movement. Hand it over, and everything about you goes together.

A variable is a loose paper. An object is the folder.
*/

// Without Object Use : 
let studentName = "Rafi";
let studentRoll = 27;
let studentBatch = "B14";
let studentMarks = 78;
let studentPresent = true;

// Show one student.
console.log(studentName, studentRoll);

// Now a second student.
let studentName2 = "Sadia";
let studentRoll2 = 31;
let studentBatch2 = "B14";
let studentMarks2 = 91;
let studentPresent2 = true;

// And a third...
// Ten students means fifty variables,
// and no way to say "this one student".


console.log('-----------------Object use ===================================');


const rafi = {
  name: "Rafi",
  roll: 27,
  batch: "B14",
  marks: 78,
  present: true,
};

const sadia = {
  name: "Sadia",
  roll: 31,
  batch: "B14",
  marks: 91,
  present: true,
};

console.log(rafi.name, rafi.roll);

// Ten students is one array of ten
// objects — and each one is a "thing".
const students = [rafi, sadia];



const createStudent = (name:string , age : number , email: string ,marks : number ) =>{
  const obj = {name,age,email ,marks , forgetPassword(){ // here every time return even not need user, this is opp concept

  }};

  return obj;
}

const student1 = createStudent("tony",20,"tony@gmail.com",100);
const student2 = createStudent("tonmoy",20,"tonmoy@gmail.com",99);

console.log(student1);
console.log(student2);