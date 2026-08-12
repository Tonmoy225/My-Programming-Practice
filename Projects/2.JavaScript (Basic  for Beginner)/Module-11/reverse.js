const commit = 'i will work hard and will never give up';

// reverse word 

const parts = commit.split('');

console.log('Show as a Part of Array : ',parts);

const reverse = parts.reverse();

console.log('Show the parts array as a reverse type : ',reverse);


// Using For Loop show the step by step : 


let reverseCom = '';

for(const latter of commit){
    reverseCom = latter +  reverseCom ;

    console.log (latter , '=>',  reverseCom);

}

console.log(reverseCom);

