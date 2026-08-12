

/*  
Prblem - 1 : Filtered Cart total ( Chaning filter  -> map -> reduce)
getExpensiveItemsTotal (cart,miniPrice) -from the cart , keep only 
items prices at or above miniPrice , then calculate the total cost 
(price* qty ) of just those items - all  in One chaining expression .



Input : 
    cart = [
    {name : "pen" , price : 20 , qty : 3},
    {name : "HeadPhone" , price : 800 , qty : 1},
    {name : "Notebook" , price : 50 , qty : 2},
    {name : "Watch" , price : 1500 , qty : 1},
    ]

    minPrice = 500 ;


    Output : 
        2300  (800*1 + 1500*1)

  Build it live , one step at a time ( uncomment one block , log move on )
        1.filter alone       -> just the expensive items 
        2.filter + map        -> price *qty  for each expensive items 
        3.filter + map  + reduce -> single total Number ; 
*/


let getExpensiveItemsTotal = (cart , miniPrice ) => {
// Traditional way to solve :

    // let total = 0;
    // for (let product of cart){
    //     console.log(product,miniPrice);

    //     if(product.price >= miniPrice){
    //          total = total + (product.price * product.qty);
    //     }
    // }


// ES6 way to solve : 

    // let filteredProducts = cart.filter( product => product.price >= miniPrice)  // fillter value store in new array ;


    let total  = cart.filter( product => product.price >= miniPrice).map(product => product.price * product.qty).reduce((accumulator,currentValue) => accumulator + currentValue,0);  // here .map is a chainig mathod to shortcut formula and also  .reduce amthod 
    // console.log(filteredProducts);

    // return filteredProducts ;

    // let modifiedProduct = filteredProducts.map(product => product.price * product.qty); // comment for see the upper chainig method

    // return modifiedProduct;

    // let totalPriceOfProduct = modifiedProduct.reduce((accumulator,currentValue) => accumulator + currentValue,0); // skip this mehod to the chainning method in upper line 

    // return totalPriceOfProduct;

    return total ;

}




let  cart = [
    {name : "pen" , price : 20 , qty : 3},
    {name : "HeadPhone" , price : 800 , qty : 1},
    {name : "Notebook" , price : 50 , qty : 2},
    {name : "Watch" , price : 1500 , qty : 1},
];

console.log(getExpensiveItemsTotal(cart,500));