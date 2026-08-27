

/*
A getter is a method marked get that is read like a property and returns a value. 
A setter is a method marked set that is assigned to like a property and receives the assigned value, 
allowing it to be validated or rejected before any field changes. 


we must be used private property in code for safty, and private nevigate by underscore before key element
 */


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

const user = new User ("Abdul",25,"abul@gmail.com");

console.log("Before Modify :",user)  // age show 27

user.age = 30; // Now we can change the value after declear set method then here we can modify

console.log("After modify the Private method : ",user)  // age will 30


console.log(user.age); // we can only access age when we use get method, if we not declear get method then show "undefined"