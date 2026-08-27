

let value : unknown;


let myValue = value as string;  // When we get unknown value then we can assert the value as type , Exaple : string ,number, boolean etc


const uppi = myValue.toUpperCase();

const youValue = value as Number ;  // When we get unknown value then we can assert the value as type , Exaple : string ,number, boolean etc
youValue.toFixed();


let data : unknown;

// Example :

interface User {
    name : string;
    email: string;
}

const userData = data as User;   // Here we can decaler the data type using Interface ;
userData.name;


// as const


const kamruzzaman : User = {
    name : 'kamruzaman kamruzman',
    email : 'kamruzaman@gmail.com'
} as const // this could be the Object constent even using interface , the object could be access but not modify 

kamruzzaman.name = 'azad' // if we try to modity the name , it can'nt be change because of constant declear 

