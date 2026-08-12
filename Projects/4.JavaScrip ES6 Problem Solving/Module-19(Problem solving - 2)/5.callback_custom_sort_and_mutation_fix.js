

/* 
Problem - 1 : Coustom sort  - Descending Numbers 

sortDesending(nums) - sort an array of numbers from largest to smallest , using a comparator callback passed to .sort() . Return a 
NEW array - don't mutate the original nums array

Input : 
    [1,10,2,25,3]

Output: 
    [25,10,3,2,1]
*/


const sortDesending = (nums) => {
    // console.log(nums); 

    const nums2 = [...nums];  // Spread the array to copy the array ;

    const sortedNums = nums2.sort((a,b) =>{
        // return a-b // working for accending pattern
        return b-a; // working for decending oder
    })

    return 'sorted numbwr-> ',sortedNums;   // but the problem is the function mutade the original array chaged so not use this perpose

}

let nums = [1,10,2,25,3];


console.log("Before Function array : ",nums);
console.log("Function call after Spread : ",sortDesending(nums));
console.log("Number after funtion : ",nums);



console.log("======================Probem : 2 ===================================================");




/* 
problem -2 : Fix the mutation bugs - Discount Preview 

previewDiscount(cart ) - should return a NEW array showing what each cart items  price Would be after a 10 % dicount , 
without changing the original cart . The buggy version below accidentlly mutates the original objects because objects / arrays 
are passed by reference - writting to item.price inside map() edits the very same object the original cart array points to :


Input :
    cart = [
    {name : "Pen ", price : 100},
    {name : "Bag" , price : 500 }
    ]

    output : (New array ; original cart price fields unchanged );
    [
    {name : "Pen ", price : 90},
    {name : "Bag" , price : 450 }
    ]

*/


const previewDiscount = (cart) => {

   
    // return cart.map((item) => {
    //     item.price = item.price - item.price* 0.1 ;
    //     return item;
    // });

    let updatedCart = cart.map((elem) => {  // rturn new array using map function 
        return {
        //    name : elem.name,

        ...elem, // cart baki elem gula spread hoa jabe , sob gulai show korbe 
           price : elem.price - (elem.price*0.1),  // return object and price also update hoe jabe 

        }
        
    })
    return updatedCart;

};

let cart = [
    {name : "Pen " , price : 100},
    {name : "Bag", price : 500},
]


console.log("Before Call function , The main array  : ",cart);
console.log(previewDiscount(cart));

console.log("After call the function then the main array : ",cart);