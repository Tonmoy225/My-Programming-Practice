


function  calculateAiCost(tokensUsed){

    if(typeof tokensUsed !== "number" || tokensUsed < 0 ){
        return "Invalid"
    }

    let extraToken = 0;



    if(tokensUsed > 500){
        extraToken = tokensUsed - 500 ;

        extraToken =Math.floor( extraToken / 100);

        extraTokenRate = extraToken * 5 ;
        return extraTokenRate;



    }
    else{
        return 0;
    }

}
const token = calculateAiCost(700);
console.log(token);