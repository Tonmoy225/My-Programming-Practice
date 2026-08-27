
/* 
Example there is a Cha stall and the program works with when sold a items then the program store a list of 
items ot sells product ---
here 2 things : 1. title , 2 . Sold Items 
*/

class ChaShop {   // Always remember the class first word must be UpperCase 
    title : string
    soldItem : any = []  // store sold item 


    constructor (title:string ){
        this.title = title

    }

    buy(name : string , price : number ){
        this.soldItem.push({name,price}) // here must be use third bracket to store data in a array of object
    }

    totalSold(){
        const total = this.soldItem.reduce((acc,item) => acc+item.price,0) // using reduce method to calculate the sold item total and initial value id 0

        return total;
    }

    
}

const shop1 = new ChaShop("Tea shop");


console.log(shop1);

console.log("------------------------------------")

shop1.buy("Tea",10); // call class using inner method "buy" which store sold items in string array
shop1.buy("Cake",100)

console.log(shop1);

console.log("------------------------------------")


console.log(shop1.totalSold());