
/* 
problem 1: Fix the scope bugs ;

review using let to fix the output: 

*/


console.log("===================Problem : 1 ============================");

let status = "Order Placed";  // Not Using var here ,because the var access the varibale form inside the for loops .


for (let i = 1 ; i <= 3 ; i++ ){
    let status = "Proccess Item " + i ;

    console.log(status);
}

console.log("Final Status : ", status);


console.log("===============problem - 2 ========================");


/* 
problem - 2: Receipt Generator ( temeplate Strings )
build a recept generator using template strings  - take item name , price , quantity as a input 
, output formatted - multiline reception .

Example : Input ("pen",20,3) -> Output "pen x3 = 60 "

*/


function receptGenerator (name,price,qty){
    // console.log(name,price,qty);

    // return name + "x" + qty + "=" + price*qty + " TAKA" ;  // old method to claculate math


    return `${name} X${qty} = ${price * qty } Taka`;

}

console.log(receptGenerator("Pen",20,3));

console.log(receptGenerator("Eraser ", 15 , 4));