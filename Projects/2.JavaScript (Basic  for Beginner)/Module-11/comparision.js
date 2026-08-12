// User .toLowerCase in String 

const subject = 'chamistry';
const book = 'Chemistry';


console.log(book.toLowerCase());

if(subject.toLowerCase() === book.toLowerCase() ){
    console.log('poira fatai pelbo');
}
else {
    console.log('aber ki auto pass ache !!!!!!!!');
    
}


// Use .trim to Skip the Additional space in the String 

const emailUser = '   goni@mia.com ';
const emailData = 'goni@mia.com';

console.log(emailUser.trim());

console.log(emailUser.trimEnd().trimStart());

if(emailUser === emailData){
    console.log('to Continue ');

}
else{
    console.log('mara kha');
}