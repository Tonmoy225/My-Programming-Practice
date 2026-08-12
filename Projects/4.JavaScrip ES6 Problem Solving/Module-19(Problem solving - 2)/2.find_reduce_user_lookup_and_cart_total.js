/* 
problem 1 : User Lookup By ID :

findUserById( user,id) - find and return the single user object whose id matchs . If no user ,returns "User not found"

Input : 
    users = [
    {id : 1 , name : "Rafi"},
    {id : 2 , name : "karim"}
    ]

    id = 2;


    output: 
        {id : 2 , name : "karim"}


*/

let findUserById = (users , id) => {
    let expectedUser = users.find(user => {

        // console.log(user,"user") 
        return user.id === id ;

    })

    if(!expectedUser) return " User not found !"
    return expectedUser ;


}

let users = [
    {id: 1 , name : "Tonmoy"},
    {id : 2 , name : "Istiar "},
    {id : 3 , name : "JUI"},
]

console.log(findUserById(users,2));



console.log("=======================Problem - 2 : ============================================");




/* 
Problem - 2 : Shopping Cart Totla (Reduce ):

getCartTotal(cart) - sum price * qty across every item in the cart using reduce()

input : 
    cart = [
    {name : "pen ", price : 20 , qty : 3 },
    {name : "Notebook ", price : 50 , qty : 2 }
    ]

Output : 
    160   (20*3 + 50*2);
*/

// accumulator -> 0
// pen -> accumulator = 0 + (20*3) = 60 
// Notebook -> Accumulator = 60 + (50 *2);
// Accumulator -> 160 return 


let getCartTotal = (cart) => {
    let total = cart.reduce((accumulator,elem) =>{

        console.log(accumulator,elem)

        return accumulator + (elem.price * elem.qty);

    },0 ) // here 0 is a default value , privious we declear a varibale total = 0 , but now the accumulator  carry this value 

    return total;
    
}


 let cart = [
    {name : "pen ", price : 20 , qty : 3 },
    {name : "Notebook ", price : 50 , qty : 2 }
    ]


    console.log(getCartTotal(cart));