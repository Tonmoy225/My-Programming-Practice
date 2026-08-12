/* 
Problem 1 : Bulk Discount Applier -

applyDiscount(price,rate) -apply a discount % to every price in the 
array and return a NEW array . The Original prices array must stay exactly the same .


Input: 
    prices = [500,1000,250]
    rate = 10 (10% discount)

Output :
    [450,900,255]


   - Original prices array must remain [500,1000,250] afterwards.

*/

let applyDiscount = (prices,discountRate) => {
    let pricesAfterDiscount = prices.map((elem,ind,arr) => {
        console.log(ind,elem);

        let discountedPrice = elem - ((elem * discountRate) / 100 );
        return discountedPrice;
    });
    // console.log(pricesAfterDiscount);
    return pricesAfterDiscount;
}

let productPrices = [500,1000,250,400,700]

console.log(applyDiscount(productPrices,10));





console.log("===========================Problem : 2 ====================================");

/* 
Problem - 2 : Passing Student Filter 
getPassingStudent (students , threshold ) - return only the students
whose marks are greater than  or equal to the given threshold .


Input : 
    students = [
    {name : " Tony" , marks : 75},
    {name : " Thor" , marks : 69},
    {name : " Cap" , marks : 45},
    {name : " Hulk" , marks : 50},

    ]

     thershold = 60 

    Output : 

    [
    {name : Tony , marks : 75},
    {name : Thor , marks : 69},

    ]

   
*/


let getPassingStudents = (students,threshold) => {
    let filteredStudents = students.filter( student=>{
        // console.log(student);

        // if(student.marks>=threshold){
        //     return true;
        // }
        // else{
        //     return false;
        // }

        return student.marks>=threshold;
    })
    return filteredStudents;
}

let students = [
    {name : " Tony" , marks : 75},
    {name : " Thor" , marks : 69},
    {name : " Cap" , marks : 45},
    {name : " Hulk" , marks : 50},
    
]

console.log(getPassingStudents(students,50));



