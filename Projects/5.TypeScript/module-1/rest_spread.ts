

const devices = {
    name : 'iphone',
    type :'smartphone',
    price :9999;
    color : 'black',
    storage : '128GB',
}

const {name : deviceName , ...deiceInfo } = devices ; // here spread the object 


// Example of wrong typescript demo :

const closeFriends : string[] = ['abul' , 'babul', 'cabul'];

const allNumbers : number [] = [...closeFriends] // here show warning because the type missing in the between number and string type array


