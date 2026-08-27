/* 
Problem 7 — Product Category Search
Concepts: typed arrays, object types, function parameters, filter(), return types
Function name must be: findProducts
Scenario
An e-commerce platform contains thousands of products. A customer selects a category, and the application needs to show only the products belonging to that category. Each product has a name, price, and category.
Task
Create a function named findProducts. The function should receive an array of products and a category, and return all products that belong to that category.
Requirement
If no product matches the category, return an empty array.
Starter Code
// TODO: define a type for a product (including category)
 
function findProducts(products: Product[], category: <type>): <type> {
 
    // write your code here
 
}

*/



interface Product {
    name:string
    price: number
    category: string
}

const findProducts = (products:Product[], category:string):Product[] => {
    
    const categoryProducts:Product[] = products.filter((product:Product) => product.category === category)


    return categoryProducts


}

const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];
 
console.log(findProducts(products, "laptop"))