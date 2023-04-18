# prep-javascript-variables-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `=` (equals) operator do in JavaScript?
  The = operator is used to assign a value to a variable.
- What operator will return the data type of a variable value?
  The assignment operator will return the data type of a variable value
- Which keyword is used to declare a variable in JavaScript?
  The keyword const is used to declare a variable in JavaScript
- Which characters is a JavaScript variable allowed to begin with?
  It is allowed to begin with a letter, a $, and a \_.
- What are quotation marks used for in JavaScript?
  They are used to specify data inside of strings.
- What is the purpose of strings in JavaScript?
  JavaScript strings are used for storing and manipulating text.
- What is the purpose of booleans in JavaScript?
  A JavaScript Boolean represents one of two values: true or false.
- What is the purpose of numbers in JavaScript?
  They are built-in objects representing numerical values.
- What does `null` mean in JavaScript?
  In JavaScript, null is "nothing." It is supposed to be something that doesn't exist.

## Notes

All student notes should be written here.

What are variables?
Variables are containers for storing data (storing data values)

Always declare JavaScript variables with var, let, or const
The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
_If you want your code to run in older browsers, you must use var._

Note: If you want a general rule, always declare variables with const.
If you think the value of the variable can change, use let.

There are 4 ways to declare a JavaScript variable:
using var
using let
using const
using nothing

In the following example, price1, price2, and total, are variables:
const price1 = 5;
const price2 = 6;
let total = price1 + price2

^^^^^The two variables price1 and price2 are declared with the const keyword. These are constant values and cannot be changed. The variable total is declared with the let keyword. This is a value that can be changed.

Just like in algebra, variables hold values:
let x = 5;
let y = 6;
let z = x + y;

ex: in this example x, y, and z are variables, declared with the var keyword
var x = 5;
var y = 6;
var z = x + y;

ex: in this example x, y, and z are variables, declared with the let keyword
let x = 5;
let y = 6;
let z = x + y;

ex: in this example, x, y, and z are undeclared variables
x = 5;
y = 6;
z = x + y;

From the examples above ^, you can deduce that:
x stores the value of 5
y stores the value of 6
z stores the value of 11, or, x + y

JavaScript IDENTIFIERS
All JavaScript variables must be identified with unique names. These unique names are called IDENTIFIERS. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
The general rules for constructing names for variables are:
Names can contain letters, digits, underscores, and dollar signs
Names must begin with a letter
Names can also begin with $ and \_ (but we will not use those at the moment)
Names are case sensitive (y and Y are different variables)
Reserved words like JavaScript keywords cannot be used as names.

THE ASSIGNMENT OPERATOR
In JavaScript, the equal sign ( = ) is an "assignment" operator, not an "equal to" operator.
This is different from algebra. x = x + 5 does not make sense in algebra, but it does in JavaScript. It assigns the value of x + 5 to x. (It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

Note: The "equal to" operator is written like == in JavaScript

JAVASCRIPT DATA TYPES
JavaScript variables can hold numbers like 100 and text values like "John Doe".
In programming, text values are called text strings.
JavaScript can handle many types of data, but for now, just think of numbers and strings.
Strings are written inside double or single quotes. Numbers are written without quotes.
If you put a number in quotes, it will be treated as a text string.
ex:
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

DECLARING A JAVASCRIPT VARIABLE
Creating a variable in JavaScript is called "declaring" a variable.
You declare a JavaScript variable with the var or the let keyword:
var carName;
let carName;
After the declaration, the variable has no value (technically it is undefined)

To assign a value to the variable, use the equal sign:
carName = "Volvo";
let carName = "Volvo";

In the example below, we create a variable called carName and assign the value "Volvo" to it.
Then we "output" the value inside an HTML paragraph with id="demo":
<script>
let carName = "Volvo";
document.getElementId("demo").innerHTML = carName;
</script>

NOTE: It's a good programming practice to declare all variables at the beginning of a script.

JAVASCRIPT DOLLAR SIGN $
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names.
  let $ = "Hello World";
  let $$$ = 3;
let $myMoney = 5;

Using the dollar sign is not very common in JavaScript, but professional proframmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements"

JAVASCRIPT UNDERSCORE
Since JavaScript treats underscore as a letter, identifiers containing \_ are valid variable names.
let \_lastName = "Johnson";
let \_x = 2;
let \_100 = 5;

Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private(hidden)" variables.

JAVASCRIPT TYPE OF \_\_\_\_
In JavaScript, there are 5 different data types that can contain values:
string
number
boolean
object
function

There are 6 types of objects:
Object
Date
Array
String
Number
Boolean

And 2 data types that cannot contain values:
null
undefined

THE typeof OPERATOR
You can use the typeof operator to find the data type of a JavaScript variable.

    typeof "John"                                  // Returns "string"
    typeof 3.14                                    // Returns "number"
    typeof NaN                                     // Returns "number"
    typeof false                                   // Returns "boolean"
    typeof [1,2,3,4]                               // Returns "object"

Please observe ^: the data type of NaN is number, the data type of an array is object, the data type of a date is object, the data type of null is object, the datat type of an undefined variabel is undefined, the data type of a variable that has not been assigned to a value is also undefined.

You cannot use typeof to determine if a JavaScript object is an array (or date).

PRIMITIVE DATA
A primitive data value is a single simple data value with no additional properties and methods.
The typeof operator can return one of these primitive types:
string
number
boolean
undefined
ex:
typeof "John" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof false // Returns "boolean"
typeof x // Returns "undefined" (if x has no value)

JAVASCRIPT STRINGS
JavaScript strings are for storing and manipulating text.
A JavaScript string is zero or more characters written inside quotes.
let text = "John Doe";
_You can use SINGLE or DOUBLE quotes_
let carName = "Volvo XC60"; // Double Quote Usage
let carName = 'Volvo XC60'; // Single Quote Usage
_You can use quotes inside a string, as long as they don't match the quotes surrounding the string_
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

JAVASCRIPT NUMBERS
JavaScript has only one type of number. Numbers can be written with or without decimals.

JAVASCRIPT BOOLEANS
A JavaScript Boolean represents one of two values: true or false.
Very often in programming, you will need a data type that can only have one of two values, like
yes/no
on/off
true/false

For this, JavaScript has a Boolean data type. It can only take the values true or false.

THE BOOLEAN() FUNCTION
You can use the Boolean() function to find out if an expression (or a variable) is true:
Boolean(10 > 9)
Or even easier:
(10 > 9)
10 > 9

JAVASCRIPT DATA TYPES
JavaScript has 8 data types: 1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 6. Null 7. Symbol 8. Object
The Object Datatype: 1. An object 2. An array 3. A date
Ex:
//Numbers
let length = 16;
let weight = 7.5;
//Strings
let color = "Yellow";
let lastName = "Johnson";
//Booleans
let x = true;
let y = false;
//Object
const person = {firstName: "John", lastName: "Doe"};
//Array Objects
const cars = ["Saab", "Volvo", "BMW"];
//Date Objects
const date = new Date("2022-03-25");

Undefined Data
In JavaScript, a variable without a value, has the value of undefined. The type is also undefined.
let car; //Value is undefined, type is undefined.
car = undefined; //Value is undefined, type is undefined.

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
