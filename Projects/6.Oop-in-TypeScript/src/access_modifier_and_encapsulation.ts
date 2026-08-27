
/* 
Encapsulation is the practice of hiding an object's internal state and exposing it only through a controlled interface.
 An "access modifier"" is the keyword that enforces this: "public" -> allows access from anywhere, 
 ->"private" restricts it to the declaring class, 
 and
 ->"protected" allows the declaring class and its subclasses.


*/


/* 
Let Think about a Modile Bank Services , Where has ---
    Balance 
    pin
    phone
    history


*/


//Access Modifier : Using here  Public 


class BikashAccount{
    public phone : string
    public balance : number
    public pin : number
    public histroy :any =  []


    constructor(phone: string , balance : number , pin : number){
        this.phone = phone
        this.balance = balance
        this.pin = pin
        
    }
    
}

const bkashAcc = new BikashAccount("012345678",5000,3929);

console.log(bkashAcc);

// Public modifier test: 

console.log("Before public modifer : ",bkashAcc.balance);// Show balance 5000

bkashAcc.balance = 0 ; // Globally or publicly modify data possible 

console.log("After public Modify :",bkashAcc.balance); // Here the balance will be 0 , Because of no security apply in Data


console.log("---------------------------Private access Modifier-------------------------------------");

//Access Modifier : Using here Private & Protected for encapsulation


class BikashAccount2{
     phone : string
     private balance : number
     private pin : number
     protected histroy :any =  []


    constructor(phone: string , balance : number , pin : number){
        this.phone = phone
        this.balance = balance
        this.pin = pin
        
    }

    
    // Uisng this Method when we want to Access from outside the class using this method with pin and balance value show
     getBalanace(pin:number){
        if(this.pin === pin){
            return this.balance
        }

        return `Pin is wrong !`

    }
    
}

const bkashAcc3 = new BikashAccount2("0123456789",5001,3939);

console.log(bkashAcc3);



// Private modifier test 1: We cannot access this way because of Private key method

// console.log("Before public modifer : ",bkashAcc3.balance);// Show balance 5000

// bkashAcc3.balance = 0 ; // Not Possible to access from Outside from class when compile typescript to javascript

// console.log("After public Modify :",bkashAcc3.balance); // Here the balance will be 0 , Because of no security apply in Data





// Private modifier test 2: Now we can access uisng getBlanace method which return balance if we want grant the access using return from method

console.log(bkashAcc3.getBalanace(3939)); // show 5001

// console.log(bkashAcc3.getBalanace(3999));// Show -> Pin is wrong !
