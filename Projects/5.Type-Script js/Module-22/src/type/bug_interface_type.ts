


// if we declear a type once then it cannot be redeclear agian :

type book = {

}

// again : 
type book = {

}

// But Interface can handle the redclear the interface again

interface Gift {
    name : string;

}
// agsin but not warning  :
interface Gift {
    price : number;

}
// interface do naturally combine , example: 

const doSomeThings : Gift ={  // access both of the interface 
    name : "Taddy", 
    price : 2000,
}

