// Problem - 11 : Sum and Avarage of a Array :

let arr = [10,30, 40 ,60 ,90,50];

let sum = 0;

for(let i = 0 ; i < arr.length ; i++ ){

    sum = sum + arr[i];

    console.log('Sum Iteration Show >>',sum);
}

const avgArr = sum / arr.length;

console.log('The Sum of the Array: ',sum);
console.log('The avarage of the array : ',avgArr);






// Using Function to Sum of a array and Avarage :
console.log("---------------Using Function--------------------");







let arR = [10,30, 40 ,60 ,90,50];


function arrSumAvg(arr){
    let sum = 0;

for(let i = 0 ; i < arr.length ; i++ ){

    sum = sum + arr[i];

    console.log('Sum Iteration Show >>',sum);
}

const avgArr = sum / arr.length;

return sum;
return avgArr;
}

const sumAvg = arrSumAvg(arR);

console.log("The Sum of the Array and Avg of the array : ",sumAvg);