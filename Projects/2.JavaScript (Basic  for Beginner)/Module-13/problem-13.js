// Problem - 13 : Loops through an object properties 

let monitor = {
    color : 'Black',
    brand : 'LG',
    display : 'somethings',
    size : '1080px'
}
for(let key in monitor){
    

    console.log(key,":",monitor[key]);
}


// Using keys method :This mathod through object into a Array 

console.log('---------Using key Mehtods-------------------');

let objkey = Object.keys(monitor);
let objvalue = Object.values(monitor);

for(let i = 0; i < objkey.length ; i++){
    console.log(i,": ",objkey[i],'->',objvalue[i]);
}

console.log(objkey,'->',objvalue);
