// pass by value 
let name = "tonmoy";

function myFunc(myName){
    myName = "Iron-Man";

    
    console.log(myName);
}

myFunc(name);
console.log(name);


// pass by refernce :
let student = {
    name : "tonmoy",
    age : 25
}

function myFunc2 (data){
    data.name = "Thor"; // the the refernce value form object ;

    data = {name : "stonger coder",  age : 25 }; // The reassign value not impact on the main Object or Change 

    console.log(data);

}

myFunc2(student);

console.log(student); // also change the value of the object 