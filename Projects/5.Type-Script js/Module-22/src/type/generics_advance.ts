

// // Normal function :

// function useState (initialValue){  
//     let value = initialValue;

//     return value ;
// }

// const counter = useState(0);

// Normaml Function call : 


function userState (initialValue : T ) : [T, (newValue : T) => void] {  
    let value = initialValue;

    function setValue (newValue : T){
        value = newValue;
    }

    return [value , setValue]; // call inner function variable using outer function value
}

const [counter,setCounter] = userState(0);



// Using Generic function : for safty check variable type or maitains static

function useState <T> (initialValue : T){ // here <T> is generic type 

}

useState<string>("0"); // If we set string or number or boolean in the <> to set in function call in typescript


interface User{
    email : string;
    isLoggedIn :boolean;
}

useState<User | null>({email : " ",isLoggedIn : false});

useState<User | null>(null);
