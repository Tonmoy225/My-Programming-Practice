
// parent Class or Super Class ;
class User {
    private _name : string
    private _age : number
    private _email : string

    constructor(name : string , age : number , email : string ){
        this._name = name 
        this._age = age 
        this._email = email
    }

    // When we declear private method and need any modify then use get and set peoprty in the class to modify;

    set age(value:number){  // setter can input argument or perameter , only one perameter can value pass and never return any value
        if(value < 0 || value > 100){
            throw new Error("Age is not valid");
        }
        this._age = value 
    }

    get age(){ // getter cannot input argument or perameter and mustbe ->return value
        return this._age
    }


}


//child class : 

class Student extends User{
        
    private _fee : number;


    constructor (name : string , age : number , email : string , fee : number){

        super(name,age,email  ) // super Call parent or superclass to use  get and set method as refernce

        this._fee = fee;
    }

}

const student = new Student("Tomnoy",25,"tonmoy@gmail.com",2000) ;

console.log(student);