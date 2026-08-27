

/* 
Abstraction is exposing what a things does while hiding how it does it . An Abastraction class is a class that cannot be instantiated 
and may decleared abstract members --members with no implementation that every concrete subclass is required to proved

Example : when we use a math.floor()  function then we didn't know the hidden function in .floor, thats way work abstraction .


*/

const d = new Date(); // here Date() hide their inner function from open user

console.log(d);

// Example 1: 

abstract class Shape {
    abstract area():number // this is abstract method . So it will also declear in child class must like this method.

    describe(){ // becauseof this a normal abstract that's why no need declear in child class ,or if need then override then 

        console.log("This is a shape !")
    }
}

class Circle extends Shape{
    radius : number

    constructor(radius : number){
        super()

        this.radius = radius

    }

    area():number{  // override the method 
        return 3.1416*this.radius*this.radius // Here if we comment out this , then show a error , Because, the child follow the parent rule 
        //if we declear area method in parent class then we also declear area method in child class 
    }
}


const circle = new Circle(5);

console.log(circle.area())
