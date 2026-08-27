/*
create class then create -object 
Object : name,email,age,marks


*/



// 1st way :

// class Student {
//     name : string = "Tonmoy"
//     email: string = "tomnoy@gmail.com"
//     age : number = 20
//     marks : number = 100
// }

// // Instantiate->(class : new student) convert with  instance->(object)
// const tonmoy = new Student ()  // Call the function 

// console.log(tonmoy); //1st way :if we call more persone details then the class show only Tonmoy data, so second mathod follow to multiple data





// 2nd way : Using constructor

class Student {
    name : string 
    email: string 
    age : number 
    marks : number 

    // constructor ---> special method

    constructor(name : string , emails : string , age : number , marks : number ){
        this.name = name ;
        this.email = emails; // this dot navigate the class key to constructor receive value . 
        this.age = age;     // if we uncomment this then show name ,age ,email are undefined
        this.marks = marks

    }

}


// Instantiate->(class : new student) convert with  instance->(object)
const tonmoy = new Student ("tonmoy","tonmoy@gmail.com",20,100);

const istiar = new Student ("istiar","istiar@gmail.com",22,99);

console.log(tonmoy);
console.log(istiar);


