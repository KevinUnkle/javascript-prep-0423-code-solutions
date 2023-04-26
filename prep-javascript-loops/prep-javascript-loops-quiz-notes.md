# prep-javascript-loops-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the **condition** expression in the `for` and `while` loops?
  The condition is an expression to be evaluated before each loop iteration. If the expression evaluates to true, the statement is executed.
- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?
  Once before the loop begins.
- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?
  It is evaluated before each loop iteration.
- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?
  It is evaluated at the end of each loop iteration.
- What is the purpose of the **final expression** in a `for` loop?
  It is generally used to update or increment the counter variable.
- What types of data should the `for...in` loop be used on?
  Non-primitive data types - strings, arrays, classes, etc.

## Notes

All student notes should be written here.

JAVASCRIPT ARRAY PUSH( )
The push() method adds a new item _to the end_ of an array.
The push() method changes the length of an array.
The push() method returns the new length.
Ex: Add a new item to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
Ex: Add two new items to the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

Syntax:
array.push(item1, item2, ...., itemX)
Parameters:
item1 The item(s) to add to the array.
item2 Minimum one item is required.
..
itemX
Return Value:
A number The new length of the array.

    Ex: Add 3 items to an array:
        const fruits ["Banana", "Orange", "Apple", "Mango"];
        fruits.push("Kiwi", "Lemon", "Pineapple");

JAVASCRIPT WHILE LOOP
The while loop creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

    Syntax:
      while(condition) {
        statement // code block to be executed
      }

    A condition is an expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. When condition evaluates to false, execution continues within the statement after the while loop.

    A statement is an optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within a loop, use a *block* statement { /* ... */ } to group those statements.

    Note: Use the break statement to stop a loop before condition evaluates to true.

          Examples: Using *while*
              while (i < 10) {
                text += "The number is" + i,
                i++;
              }

          In this example ^^, the code in the loop will run, over and over again, as long as a variable (i) is less than 10.

    *Note*: If you forget to increase the variable used in the condition, the loop will never end and this will crash your browser LOL.

THE DO WHILE LOOP
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is ture, then it will repeat the loop as long as the condition is true.

    Syntax:
        do {
          // code to be executed
        }
        while (condition);

    Ex: The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
        do {
          text += "The number is" + i;
          i++;
        }
        while (i < 10);
    *Do not forget to increase the variable used in the condition, otherwise the loop will never end.*


            The following while loop iterates as long as n is less than three.

              let n = 0;
              let x = 0;

              while (n < 3) {
                n++;
                x += n;
              }

            Each iteration, the loop increments n and adds it to x. Therefore, x and n take on the following values:
                -After the first pass: n = 1, and x = 1
                -After the second pass: n = 2, and x = 3
                -After the third pass: n = 3, and x = 6
            After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

JAVASCRIPT _FOR_ LOOP
Loops are hand, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays:

    Instead of writing:
      text += cars[0] + "<br>"
      text += cars[1] + "<br>"
      text += cars[3] + "<br>"

    You can write:
    for (let i = 0; i < cars.length; i++;) {
      text += cars[i] + "<br>";
    }

Different Kinds of Loops:
JavaScript supports differrent kinds of loops:
for: loops through a block of code a number of times
for/in: loops through the properties of an object
for/of: loops through the values of an iterable object
while: loops through a block of code while a specified condition is true
do/while: also loops through a block of code while a specified condition is true.

The _for_ Loop:
The for statement creates a loop with 3 optional expressions:
for (expression1; expression 2; expression3) {
// code block to be executed
}
Expression1 is executed (one time) before the execution of the code block.
Expression2 defines the condition for executing the code block.
Expression3 is executed (every time) after the code block has been achieved.
Ex:
for (let i = 0; i < 5; i++) {
text += "The number is" + i + "<br>";
}
Expression1 sets a variable loop before the loop starts (let i = 0)
Expression2 defines the condition for the loop to run (i must be less than 5)
Expression3 increases a value (i++) each time the code block in the loop has been executed.

_for...in_ LOOPS:
the for...in statements combo iterates (loops) over the properties of an object.
The code block inside the loop is executed once for each property.
Ex:
Iterate (loop) over the properties of an object:
const person = {fname: "John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
text+= person[x] + " ";
}

        Iterate (loop) over the values of an array:
            const cars = ["BMW", "Volvo", "Saab", "Ford"];
            let text = "";
            for (let x in cars) {
              text += cars[x] + " ";
            }

    Syntax: for (x in object) {
      code block to be executed
    }

    Parameters:
        x     Required. A variable to iterate over the properties.
      object   Required. The object to be iterated.

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
