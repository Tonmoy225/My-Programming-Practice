
// Normal Concept :  

// interface Response {
//     // data : any 

//     // data : string | number | boolean | object | null ;

//     status : number ;
// }


// Generic concept :


interface Response<T> {  // interface  store <T> wich it manual set by function <string > or <boolean> or <number > call by reernce ; 
    data : T;
    status : number ;
}


const transactionResponse : Response <string>  = { // function call by interface 
    data : "Transection Successful", // only accept the string becasue the <> are declear as string 
    status : 200,
}

const transactionStatus : Response<boolean> = {
    data : false ,
    status : 200,
}
const transactionStatusVew : Response<number> = {
    data : 403 ,
    status : 200,
}


// Array declear in generic :

function getlength<T> (array : T[]) : number {  // array declear in number type
    return array.length;
}

getlength<number>([33,4,1]);