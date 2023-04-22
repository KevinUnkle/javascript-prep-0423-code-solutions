# prep-javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `strictly equal` mean?
  Strictly equal means equal value and equal type.
- What is the logical **and** operator?
  The logical and operator is &&.
- Can you name some comparison operators?
  Some comparison operators are equal to(==), equal value and equal type(===), not equal(!=), >(greater than), <(less than), greater than or equal to(>=), less than or equal to(<=).

## Notes

All student notes should be written here.

JAVASCRIPT IF, ELSE, AND ELSE IF
Conditional statements are used to perform different actions based on different conditions.

Conditional Statements:
Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.
In JavaScript we have the following conditional statements: 1. Use _if_ to specify a block of code to be executed, if a specified condition is _true_. 2. Use _else_ to specify a block of code to be executed, if the same condition is _false_. 3. Use _else if_ to specify a new condition to test, if the first condition is _false_. 4. Use _switch_ to specify many alternative blocks of code to be executed.

The _if_ Statement:
Use the _if_ statement to specify a block of JavaScript code to be executed if a condition is true.
Syntax:
if (condition) {
// block of code to be executed if the condition is true
}
Note that _if_ is in lowercase letters. Uppercase letters (If or IF) will generate a Javascript error.
Ex: Make a "Good day" greeting if the hour is less than 18:00:
if (hour < 18) {
greeting = "Good day";
}
The result of this greeting will be: "Good day"

The _else_ Statement:
Use the _else_ statement to specify a block of code to be executed if the condition is false.
if (condition) {
// block of code to be executed if the condition is true
} else {
// block of code to be executed if the condition is false
}
Ex: If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
if (hour < 18) {
greeting = "Good day";
} else {
greeting = "Good evening";
}
The result of the greeting will be: "Good day"

The _else if_ Statement:
Use the _else if_ statement to specify a new condition if the first condition is false.
Syntax:
if (condition1) {
// block of code to be executed if condition1 is true
} else if (condition2) {
// block of code to be executed if condition1 is false and condition2 is true
} else {
// block of code to be executed if condition1 is false and condition2 is false
}
Ex: If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
if (time < 10) {
greeting = "Good morning";
} else if (time < 20) {
greeting = "Good day";
} else {
greeting = "Good evening";
}
The result of the greting will be: "Good day"

COMPARISON OPERATORS
== equal to
=== equal value and equal type
!= not equal
!=== not equal value or not equal type > greater than
< less than >= greater than or equal to
<= less than or equal to

How to use comparison operators:
Comparison operators can be used in conditional statements to compare values and take action depending on the result:
if (age < 18) text = "Too young to buy alcohol";

LOGICAL OPERATORS:
Logical operators are used to determing the logic between variables or values.
Given that x = 6 and y = 3, the table below explains the logical operators:

      Operator        Description         Example
      &&              and               (x < 10 && y > 1) is true
      ||              or                (x == 5 || y == 5) is false
      !               not               !(x == y) is true

CONDITIONAL (TERNARY) OPERATOR
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
Syntax:
variableName = (condition) ? value1:value2
Ex:
let voteable = (age < 18 ) ? "Too young":"Old enough";
\*If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".

COMPARING DIFFERENT TYPES
Comparing different data types may give unexpected results.
When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison . An empty string converts to 0. A non-numeric string converts to NaN which is always false.
When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
To secure a proper result, variables should be converted to the proper type before comparison:

      age = Number(age);
      if (isNan(age)) {
        voteable = "Input is not a number";
      } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
      }

The Nullish Coalescing Operator _??_
The ?? operator returns the first argument if it is not nullish (null or undefined)
Otherwise it returns the second argument
Ex:
let name = null;
let text = "missing";
let result = name ?? text;

The Optional Chaining Operator _?._
The ?. operator returns undefined if an object is undefined or null.
// create an object:
const car = {type:"Fiat", model:"500", color:"white"}
// ask for car name:
document.getElementById("demo").innerHTML = car?.name;

Strict Equality Operator _===_
The strict equality operator === checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different. 1. If the operands are of different types, return false. 2. If both operands are objects, return true only if they refer to the same object. 3. If both operands are null or both operands are undefined, it returns true. 4. If either operand is NaN, it returns false. 5. Otherwise, compare the two operand's values:
-Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
-Strings must have the same characters in the same order.
-Booleans must be both true or both false.

The most notable difference between this operator and the equality (==) operator is that if the operands are of different types, the == operator attempts to convert them to the same type before comparing.

HOW TO COMPARE OBJECTS
const object1 = {
key: "value",
};
const object2 = {
key: "value",
};

        console.log(object1 === object2);
        console.log(object1 === object1);

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
