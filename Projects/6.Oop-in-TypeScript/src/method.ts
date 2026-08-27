
// Object related or class related every function is a method in typescript , just skip delcear the function keyword before declear method ;


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


    getInfo():string{ // Method : this way see all data 

        const info = `Name : ${this.name} \n Email : ${this.email} `;

        return info;
    
}

}

const tonmoy = new Student ("tonmoy","tonmoy@gmail.com",20,100);

const istiar = new Student ("istiar","istiar@gmail.com",22,99);

console.log(tonmoy.getInfo()); // This way call method 

console.log("-----------------------------------");

console.log(istiar.getInfo());





