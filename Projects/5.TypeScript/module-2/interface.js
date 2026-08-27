"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mark = {
    name: "mark",
    id: 1,
    department: "Enginnering",
    salary: 75000,
};
const bill = {
    name: "bill",
    id: 2,
    department: "Marketing",
    salary: 65000,
};
const team = [mark, bill, {
        name: "Alice ",
        id: 103,
        department: "Marketing",
    }];
// important : 
function printEmployeeDetails(employee) {
    console.log(`Name : ${employee.name}`);
    console.log(`ID : ${employee.id}`);
    console.log(`Department : ${employee.department}`);
}
printEmployeeDetails({ name: 'Elon', department: 'spaceX', id: 64 });
function displayEmployeeDetails({ name, id, department }) {
    console.log(`Name : ${name}`);
    console.log(`ID : ${id}`);
    console.log(`Department : ${department}`);
}
displayEmployeeDetails(mark);
//# sourceMappingURL=interface.js.map