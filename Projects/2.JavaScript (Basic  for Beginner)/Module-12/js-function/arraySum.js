const numbers = [12 , 4 , 8 , 18 , 30 ];

let sum = 0 ;

for (const num of numbers){
    sum = sum + num ;
    console.log(num, sum);
}
console.log(sum);



console.log("--------------Array_Sum_Using Function__________________");



const number = [12 , 4 , 8 , 18 , 30 ];
function sumOfArray(array){
    console.log('Inside the array : ', array );
    let add = 0;

    for(const num of array){
        add = add + num ;
        console.log(num,add);
    }
    return add;
}
const result = sumOfArray(number);
console.log('Sum of Array',result);