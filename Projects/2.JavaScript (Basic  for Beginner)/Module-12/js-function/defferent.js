// Example for String Perameter :

 function fullname (firstName , lastName ){
    const fullName = firstName +" " + lastName ;
    return fullName ;
 }

 const name = fullname ('mohabbat','Ali');
 console.log(name);


 console.log('--------------------------------------------');


 // Example for Boolean Perameter 

 function doubleHalf(price,isDouble){
    if(isDouble === true ){
        const askingPrice = price * 2;
        return askingPrice
    }
    else {
        const askingPrice = price / 2;
        return askingPrice; 
        
    }
 }

 const myPrice = doubleHalf(100,true);
 console.log('price for Mango People',myPrice);
const leaders = doubleHalf(100,false);
 console.log('price for Rich People ',leaders);




 // Array element Using as Perameter 


 function firstElementDouble(array){
    console.log('got the perameter value : ',array);
    const firstElement = array[0];
    const doubled = firstElement * 2;
    return doubled;
 }

 const numbers = [45, 8 ,7 ,34 , 55, 6];
 const doubled = firstElementDouble (numbers);


 console.log('Double of the First Element :',doubled);



 // Object type Perameter for Use in Function : 


 const student = {
    name : 'Tonmoy',
    id : 10 ,
    marks : 75 
 }
 function isStudent(student){
    console.log('Got the student: ', student);
    const marks = student.marks;

    console.log('his marks : ',marks);

    if(marks >= 80){
        return true;
    }
    else{
        return false;
    }

 }

 const isPass = isStudent(student);