
/* 

Problem : 1 - Assignment Life (Closures)


Real-Life scenario : On Programming Hero ,every student gets 3 LIVES . Each time you submit an assignment Late for 
60 marks , you Lose 1 Life .
When LIVES hit 0 ,  you cannot submit Late Assignment for 60 marks .You want ONE function that can create a fresh , independent life-counter .


createLifeCounter() -returns a function . Every time you call that returned function (on a late submition ) , it decreases a private lives count
 by 1 and returns the remaininng Lives . there is No global variable storing lives - it lives  only inside the clouser . 
 
 Input : 
    const rahimLives = createLifeCount ();
    rahimLives() ; // Late submit
    rahimLives();  //Late submit 

Output : 
    2
    1



*/


const createLifeCounter = ()=>{
    let lives = 3;


    return () => {  //  Anonymus Function or neasted function ; // clouser function still work in this function  
        if(lives > 0){
            lives--;
        }
        console.log(lives);
        return lives;
    }
}

const rahimLifeUpdate = createLifeCounter();  // also a function ;
const karimLifeUpdate = createLifeCounter();
const jahimLifeUpdate = createLifeCounter();
const dahimLifeUpdate = createLifeCounter();


console.log( "Rahim Lives :",rahimLifeUpdate())
console.log("Rahim Lives :",rahimLifeUpdate())
console.log("Rahim Lives :",rahimLifeUpdate())
console.log("Rahim Lives :",rahimLifeUpdate())

console.log("Karim Lives :",karimLifeUpdate())
console.log("Karim Lives :",karimLifeUpdate())
console.log("Karim Lives :",karimLifeUpdate())



console.log("Jahim Lives :",jahimLifeUpdate())






