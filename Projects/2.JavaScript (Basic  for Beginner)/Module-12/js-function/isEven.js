

function isEven(number){
    console.log(number," Devided by 2 reminder", number % 2 );

    if(number % 2 === 0 ){
        return true;
    }
    else{
        return false;
    }
    

}

const result = isEven(55);
console.log(result);