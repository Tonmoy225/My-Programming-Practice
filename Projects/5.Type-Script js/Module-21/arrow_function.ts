// Normal function vs Arrow function 

// const getLargeName = (name1, name2) => {
//     if(name1.length > name2.length ){
//         return name1;
//     }
//     return name1;
// }


const getLargeName = (name1 : string, name2 :string ) : string => {
    if(name1.length > name2.length ){
        return name1;
    }
    return name1;
}

