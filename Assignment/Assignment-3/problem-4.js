function bonusScore(scores) {
    // Write your code here

    if(!Array.isArray(scores)  || scores.length === 0 ){
        return "Invalid";
    }


    // if(scores.length === 0 ){
    //     return "Invalid"
    // }

    const allNumbers = scores.every((score) => typeof score === "number");

    if(!allNumbers){
        return "Invalid";
        
    }


    const updateScores = scores.map((score) => score +10);

    const total = updateScores.reduce((sum, current) => sum + current, 0) ;

    return total ;
}

console.log(bonusScore("scores"));