const person = {
    name : "Abul",
    profession : 'Teacher',
    age : 21 ,
    isSingle : true,
    'home adress' : 'NewKhali' // avabeo key kora jai object hisebe but dot Notation vabe use kora jabe na! but Second bracket use korle kaj  Korbe
}



const collage = {
    name : 'BGM',
    student : 500,
    event : ['21 Feb', 'Independed Day'],

    people : {
        principal : {
            name : 'Aul Kha',
            years : 2026
        }
    }
}
console.log(collage.people.principal.name);

// Key vlaue pair show mathod by 'entries' use 

console.log(Object.entries(person));