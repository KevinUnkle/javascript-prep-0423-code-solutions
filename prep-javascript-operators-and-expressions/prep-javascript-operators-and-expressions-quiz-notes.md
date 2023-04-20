# prep-javascript-operators-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What data type is returned by an arithmetic operation?
  A single numerical value.

- What is string concatenation?
  Two strings that are essentially joined together.

- What purpose(s) does the `+` plus operator serve in JavaScript?
  This operator serves to add two variables together.

- What data type is returned by comparing two values (`<`, `>`, `===`, etc)?
  A Boolean value of true/false.

- What does the `+=` "plus-equals" operator do?
  This is an addition assignment operator that performs addition on two operands an assigns the result to the left operand.

## Notes

All student notes should be written here.

JAVASCRIPT OPERATORS
The Assignment Operator (=) assigns a value to a variable:
let x = 5;
let y = 2;
let z = x + y;

The Addition Operator (+) adds numbers:
let x = 5;
let y = 2;
let z = x + y;

The Multiplication Operator (_) multiplies numbers:
let x = 5;
let y = 2;
let z = x _ y;

TYPES OF JAVASCRIPT OPERATORS:
-Arithmetic Operators
-Assignment Operators
-Comparison Operators
-String Operators
-Logical Operators
-Bitwise Operators
-Ternary Operators
-Type Operators

Arithmetic Operators are used to perform arithmetic on numbers:
let a = 3;
let x = (100 + 50) \* a;

ARITHMETIC OPERATORS: + addition - subtraction \* multiplication
\*\* exponentation
/ division
% modulus (division remainder)
++ increment
-- decrement

ASSIGNMENT OPERATORS:
Operator: Ex: Same as:
= x = y x = y
+= x += y x = x + y
-= x -= y x = x - y
_= x _= y x = x \* y
/= x /= y x = x % y
%= x %= y x = x % y
**= x **= y x = x \*\* y

COMPARISON OPERATORS:
== equal to
=== equal value and equal type
!= not equal
!== not equal value or not equal type > greater than
< less than >= greater than or equal to
<= less than or equal to
? ternary operator

JavaScript String Comparison
_All the comparison operators above can also be used as strings_
let text1 = "A";
let text2 = "B";
let result = text1 < text2
_Strings are compared alphabetically_

JAVASCRIPT STRING ADDITION:
The + can also be used to add (concatenate) strings
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

The += assignment operator can also be used to add (concatenate) strings
let text1 = "What a very";
text 1 += "nice day";
The result ^ will look like: What a very nice day

ADDING STRINGS AND NUMBERS
Adding two numbers will return a sum, but adding a number and a string will return a string.
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
The result of x, y, and z will be:
x = 10
y = 55
z = Hello5
_If you add a number and a string, the result will be a string!_

JAVASCRIPT LOGICAL OPERATORS:
&& logical an
|| logical or
! logical not
_These are described in the JS Comparisons chapter_

JAVASCRIPT TYPE OPERATORS
typeof returns the type of a variable
instanceof returns true if an object is an instance of an object type

HOW TO USE THE CONSOLE.LOG()
var greeting = 'Hello World';
conosle.log(greeting);

CONCATENATING STRINGS
Concatenate just means "join together". To join together strings in JavaScript you can use a different type of string, called a template literal.

A template literal looks just like a normal string, but instead of using single or double quotation marks, you use backtick (`) characters.
      const greeting = `Hello`;

This can work just like a normal string, except you can include variables in it, wrapped inside ${ } characters, and the variable's value will be inserted into the result:
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);
This would show up as "Hello, Chris"

You can use this technique to join two variables together:
const one = "Hello, ";
const two = "how are you?";
const joined = `{one}${two}`;
console.log(joined);
This would show up as "Hello, how are you?"

CONCATENATION USING +
You can also concatenate using the + operator
const greeting = "Hello";
const name = "Chris";
console.log(greeting + " " + name);
This would show up as "Hello Chris"

_However, template literals usually give you more readable code_

const greeting = "Hello";
const name = "Chris";
console.log(`{greeting}, ${name}`);

This would show up as "Hello Chris"

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
