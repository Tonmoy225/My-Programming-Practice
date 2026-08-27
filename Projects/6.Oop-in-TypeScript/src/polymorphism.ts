



class Animal {
    private _name ;

    constructor(name:string) {
        this._name = name;
    }


    makeSound():void {
        console.log("Animal can make Sound");
    }
}

class Cat extends Animal{

    makeSound(): void {
        console.log("Meeeeowwwooo"); // using polymorphism, because the main method chnage here and override new data print
    }

}



class Dog extends Animal{  // also inherit by other class

    makeSound(): void { // we can override the super class method makeSound()
        console.log("bla bla");  // using polymorphism
    }

}

//  Now create a instance :

const cat = new Cat ("Billlu")

console.log(cat); // print the child class with super class property cat name ;)

cat.makeSound(); // cat class inherit the super class Animal to call makeSound Method 

const dog = new Dog ("Doggy")

console.log(dog);

dog.makeSound()


// Another example:
console.log("----------------------------------Example : 2 ----------------------------------")

class Shape {
    area():number{ // using this parent method with child method 
        return 0;
    }
}

class Circle extends Shape{
    radius : number

    constructor(radius : number){
        super()

        this.radius = radius

    }

    area():number{  // override the method 
        return 3.1416*this.radius*this.radius
    }
}


const circle = new Circle(5);

console.log(circle.area())