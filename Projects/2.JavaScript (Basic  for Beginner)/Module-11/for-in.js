const student = {
    name : 'Akbar mongol',
    id : 111,
    age : 14,
    subject : ['Chemisrty','Physics','Math']
}

// for ....of --> array opor use hoi 

// for .....in --> object ar opor use hoi 

for(const key in student){
    console.log(key);
    const value = student[key];
    console.log(key,value);

}

// Object wise korle Array te Convert hobe then amra Orignial For loops use korbo

const keys = Object.keys(student);
for(const key of keys){
    console.log('Using Array : ',key);
    const value = student[key];
    console.log(key,value);
}