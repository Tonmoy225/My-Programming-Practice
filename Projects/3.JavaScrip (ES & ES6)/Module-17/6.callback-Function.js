// A callback is a function passed as an argument to anoter function 

// "i will call back"

function registerStudent(cb){
    console.log('user is registering . Need more information :');

    console.log(cb); // here cb is call back function of userBasicinfo to refer the function 

    cb();

    
}

function userBasicinfo(){
    let student = {
        name : "Tonmoy",
        age : 25,
        roll: 6473 
    }
    console.log(student);

    return student;
}

console.log(registerStudent(userBasicinfo))