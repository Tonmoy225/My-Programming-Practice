 

function calculateTax (ammount : number | string | null , taxRate : number) : number {
    // if the mistaklty input string then convert it when check the system :
    if (typeof ammount === 'string'){
        ammount = parseFloat(ammount); // then convert it float type 
    }

    // or if input null then we will made another condition to handel this bugs :


    return ammount * texRate ; 

}

const myTax = calculateTax(100,0.45);

const yourTax = calculateTax("200",0.3); // here if the client mistakely input string the or | string option will work and skip error


// null : 
const myFuture : number | null = null; 

// undefined :
const myMoney : number | undefined = '23';

// any :

const myBio : any = 'heloo or 2441139 or boolean or etc';

//unknown :

const myUnknown : unknown = "hello" ;
