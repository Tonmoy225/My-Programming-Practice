
function generateLeaderboard(students){
    if (!Array.isArray(students)){
        return "Invalid";
    }

    if(students.length === 0 ){
        return "Invalid";
    }


    const allValid = students.every (
        (student) => student?.name !== undefined && typeof student?.score === "number"
    );
    if( !allValid){
        return "Invalid";
    }


    const qualified = students.filter((student) => {
        return student.score >= 70;
    });


   const names = qualified.map(({ name }) => {
    return name.toUpperCase();
  });



return names.slice(0,3);

}

console.log(generateLeaderboard([{"name":"Rafi","score":90},{"name":"Sadia","score":65},{"name":"Karim","score":85},{"name":"Nafis","score":75}]));