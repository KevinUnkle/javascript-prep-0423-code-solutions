# prep-javascript-arrays-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the principal use of arrays?
  The principle use of an array is a special variable which can hold more than one value.
- Describe the syntax (structure) of array-literals in JavaScript.
  const array_name = [item1, item2, item3, ...];
- What number represents the **first** index of an array?
  0
- How can you access the last element of an array?
  To access the last element of an array, it should look like:
  const random1 = Variable1[Variable1.length - 1];

## Notes

All student notes should be written here.

JAVASCRIPT ARRAYS
An array is a special variable , which can hold more than one value:

    const cars = ["Saab", "Volvo", "BMW"];

Why use arrays?
If you have a list of items (a list of car names, for example) storing the cars in single variables could look like this:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However! What if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

CREATING AN ARRAY
Using an _ARRAY LITERAL_ is the easiest way to create a JavaScript Array:

    const array_name = [item1, item2, item3, ...];

_Spaces and line breaks are not important. A declaration can span multiple lines_

    const cars = [
      "Saab";
      "Volvo";
      "BMW"
    ];

You can also create an array, and then provide its elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

USING THE JAVASCRIPT KEYWORD "NEW"
The following example also creates an array, and assigns values to it:
const cars = new Array("Saab", "Volvo", "BMW");

_The two examples above do exactly the same thing_
_There is no need to use new Array()_
_For simplicity, readability, and execution speed, use the array literal method._

ACCESSING ARRAY ELEMENTS
You can access an array element by referring to the _index number_
Note: Array indexes start with 0.
[0] is the first element. [1] is the second element.

    const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0];

CHANGING AN ARRAY ELEMENT
This statement changes the value of the first element in cars:
cars[0] = "Opel";
Ex:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

ACCESS THE FULL ARRAY
With Javascript, the full array can be accessed by referring to the array name:
const cars = ["Saab", "Volvo", "BMW"];
document. getElementById("demo").innerHTML = cars;

ARRAYS ARE OBJECTS
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.
\*Arrays use numbers to access its "elements". In this example, person[0] returns John:
Array:
const person = ["John", "Doe", 46];
Object:
const person = {firstName:"John", lastName:"Doe", age:46};
Objects use names to access it's "members". In this example ^^, person.firstName returns John.

ARRAY ELEMENTS CAN BE OBJECTS
JavaScript variables can be objects. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array. You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

ARRAY PROPERTIES AND METHODS
The real strength of JavaScript arrays are the built-in array properties and methods:
cars.length //Returns the number of elements
cars.sort() //Sorts the array

THE LENGTH PROPERTY
The length property of an array returns the length of an array (the number of elements).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length
_The length property is always one more than the highest array index_

ACCESSING THE FIST ARRAY ELEMENT:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0]

ACCESSING THE LAST ARRAY ELEMENT:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruit.length - 1]

THE DIFFERENCE BETWEEN ARRAYS AND OBJECTS
In JavaScript, arrays use numbered indexes.
In JavaScript, objects use named indexes.
Arrays are a special kind of object, with numbered indexes.

WHEN TO USE ARRAYS AND WHEN TO USE OBJECTS
JavaScript does not support associative rays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want element names to be numbers.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
