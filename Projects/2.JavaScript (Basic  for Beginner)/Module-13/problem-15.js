// Problem-15: Return All Even Numbers , then their Sum :

let arr = [12,24,55,60,250,150,34,22,20,30,92,40];

let storeEven = [];
let sum = 0;

for(let i = 0; i < arr.length ; i ++){

    if(arr[i] % 2 === 0){
        storeEven.push(arr[i]);
        

    }
    console.log(storeEven);
}
for(let j = 0 ; j < storeEven.length ; j++){
    sum = sum + storeEven[j];
    console.log(sum);
}

 console.log('the Number of sum of Even Number : ',sum);