

const book : string [] = ["Book 1", "Book23 "],

const runs : number []  = [ 10,20, 30 ];


const shopping_list : [string,number] = ["iphone",12000];  // fixed size array 


// optional property : 

const books : {
    name : string,
    author : string,
    price: number,
    page : number ,
    isUsed ?: boolean  ,  //Uisng Optional chaining to deside , if the value is define then show ,otherwise not error
} = {
    name : "Chemistry",
    author : "naag",
    price : 500,
    page : 200,
    isUsed : true ,

}