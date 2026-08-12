// Problem-8 : Count words In a Sentence 

let str = "Programming Hero code habi jabi";

let splitWord = str.split(" ");

console.log("Split word in Sentence : ",str.split(" "));

console.log("Counted word in a sentence : ",splitWord.length);



// With Function to Count 

console.log("---------------with Function -------------------------")

function countWord(str){
    let splitWord = str.split(" ");

console.log("Split word in Sentence : ",str.split(" "));


return splitWord.length;
}

console.log(countWord("Ther abal group of Programming Zero"));
