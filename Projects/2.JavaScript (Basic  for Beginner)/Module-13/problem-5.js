// Problem-5 : Reverse a string 



// without Function ----
console.log('----------Without Function----------------');



 let str = 'Programming';

 console.log(str[10]);

 let reverseWord = '';


 for(let i = str.length - 1; i>= 0 ; i--){
    let letter = str[i];
    console.log(i,'>>',str[i])
    reverseWord = reverseWord + letter ;
 }
 console.log('The Reversed Word :',reverseWord);


 // with Function --
 console.log('-------------With Function ---------------');

 function reversed(word){

   let reverseWord = '';


 for(let i = word.length - 1; i>= 0 ; i--){
    let letter = word[i];
    console.log(i,'>>',word[i])
    reverseWord = reverseWord + letter ;
 }
 return reverseWord;

 }

 console.log(reversed("Bangladesh"));