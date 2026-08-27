
// function add (num1 : number , num2 : any)
function add (num1 : number , num2 : number):number{ // here after colon mean what output type return that type  
    const total = num1 + num2 ;
    return total;
}

add(5,"10");

const result = add(5,10); // accepted 

// const results : string = add(5,10);   // Here the string not accepted becasue the function know that output is number so that variable not store string 


// here if we filled with right condition or logic then it match with the varivble type 

function adds (num3 : number , num4 : number):boolean{ // here after colon mean what output type return that type  
    const total = num3 + num4 ;
    return total > 20 ;
}


function calculate () : void {
     
}