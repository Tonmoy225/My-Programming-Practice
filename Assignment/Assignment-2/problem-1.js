



function matchWinner(teamAGoals,teamBGoals){

    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number" || Number.isNaN(teamAGoals) ||
        Number.isNaN(teamBGoals)){
        return "Invalid";
    }




    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }
    else if (teamAGoals < teamBGoals){
        return "Team B Won";
    }
    else {
        return "Draw";
    }
    
    
}

console.log(matchWinner(5,null));