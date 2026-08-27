

interface Employee {
    name : string;
    id : number ;
    department : string;
    salary ?: number ;

}

const mark : Employee =  {
    name: "mark",
    id : 1 , 
    department : "Enginnering",
    salary : 75000,


}
const bill : Employee = {
    name: "bill",
    id : 2 , 
    department : "Marketing",
    salary : 65000,
}

const team : Employee[] = [mark, bill,{
    name : "Alice ",
    id : 103,
    department : "Marketing",
}]


// important : 

function printEmployeeDetails (employee : Employee ): void {  //Basic structure type in function
    console.log(`Name : ${employee.name}`);
    console.log(`ID : ${employee.id}`);
    console.log(`Department : ${employee.department}`);

}
printEmployeeDetails({name :'Elon',department:'spaceX',id:64});


function displayEmployeeDetails({name,id,department} : Employee ) : void { // Another type of funtion in typescript
    console.log(`Name : ${name}`);
    console.log(`ID : ${id}`);
    console.log(`Department : ${department}`);

}

displayEmployeeDetails(mark);