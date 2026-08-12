

// function isElevatorSafe (weights){

//     if(!Array.isArray(weights)){
//         return "Invalid";
//     }

//     let sum = 0;

//     for(let i = 0; i < weights.length ; i++){
//         sum = sum + weights[i];
        

//     }
//     if(sum <= 400){
//       return true;  
//     }
//     else{
//         return false;
//     }
    
// }

// let arr = [90,100,95,120];
// const liftSafe = isElevatorSafe(arr);
// console.log("People weights : ",liftSafe);




function isElevatorSafe(weights) {
    // Write your code here
    if(!Array.isArray(weights)){
        return "Invalid"
    }
    let sum = 0 ;

    for(let i = 0; i < weights.length ;i++ ){
        sum = sum + weights[i];
    }

    if(sum <= 400){
        return true;
    }
    else{
        return false;
    }
    
}
let arr =[401];
console.log(isElevatorSafe(arr));