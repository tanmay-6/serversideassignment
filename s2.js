/*
22. Write a JavaScript program to create a class called 'Rectangle'
with properties for width and height. Include two methods to
calculate rectangle area and perimeter. Create an instance of the
'Rectangle' class and calculate its area and perimeter.
*/
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

let rectangle = new Rectangle(5, 7);

let area = rectangle.calculateArea();
let perimeter = rectangle.calculatePerimeter();

console.log("Rectangle Area:", area);
console.log("Rectangle Perimeter:", perimeter);
