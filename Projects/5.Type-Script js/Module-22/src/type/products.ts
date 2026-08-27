
type Product = {
    id : number;
    name : string;
    price : number;
    description ?: string;
}

const products : Product[] = [ // Here we can store Many object in a array 
    {
        id : 1 ,
        name : "laptop",
        price : 999.9,
        description : "High",
    },
    {
         id : 2 ,
        name : "Desktop",
        price : 1999.9,
        description : "medium",
    }
]