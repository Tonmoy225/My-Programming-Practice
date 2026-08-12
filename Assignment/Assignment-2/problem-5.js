/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false || times.length === 0   ) {
    
        return "Invalid";
   }

   else if (times.length === 0) {
        return "Invalid";
    }
    for(let j = 0; j < times.length ; j++){
        if(typeof times[j] !== "number" ){
            return "Invalid";
        }
    }

 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

  return total / times.length;
}


let arr =[120,"200",150];
// let arr = [];
let avg = averageResponseTime(arr);

console.log(avg);