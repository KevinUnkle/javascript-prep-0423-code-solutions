# prep-javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the five parts of a function definition?
  The function keyword, an optional name, a comma-separated list of parameters surrounded by parentheses, the start of the functions code block, an optional return statement.
- How do you call a function?
  To call a function, simply write the name of the function and place parentheses next to it.
- What is the difference between a parameter and an argument?
  When we define a function, we declare parameters. When we call a function, we pass it arguments.

## Notes

All student notes should be written here.

JAVASCRIPT FUNCTIONS
Functions are the first "power" tool that new programmers should learn deeply. It may look like a lot of information, but this guide only covers the _absolute basics_ of JavaScript functions. That said, once you master the basics of creating and using functions, you will understand how a huge portion of the world's software is written.

The benefits of even the most basic functions include: 1. Packing up code for reuse throughout a program 2. Giving a name to a handful of code statements to make it easier to read. 3. Making code "dynamic", meaning that it can be written once to handle many (or even infinite!) situations.

This guide includes information on the following: 1. Defining Functions 2. Calling Functions 3. Returning from Functions 4. Naming Functions 5. Anonymouos Functions

DEFINING FUNCTIONS
At any given moment, programmers typically interact with a function in one of two ways:
-defining a function
-calling a function

Example function definition:
function sayHello() {
var greeting = 'Hello World!';
console.log(greeting);
}
Here is a detailed breakdown of the function definition syntax
[1] [2] [3]
function example(parameter1, parameter2, ...) { [4]
//.....more javascript code.....///
// [5]
return;
} [6]

1. The function keyword to begin the creation of a new function
2. An _optional_ name. (Our functions name is sayHello.)
3. A comma-separated list of zero or more _parameters_, surrounded by () parenthesis.
4. The start of the function's _code block_, as indicated by an { opening curly brace.
5. An _optional_ return statement. (our sayHello function doesn't have a return statement)
6. The end of the function's _code block_, as indicated by a } closing curly brace.

CALLING FUNCTIONS
It is important to point out that defining a function does not cause the code in its _code block_ to be run. Once _defined_, a function is just another kind of object. However, it is special in that it can be _called_. A function must be _called_ for the code within its _code block_ to run. Let's take a look at an example of _calling_ the sayHello function we defined earlier. It's already defined, but waiting for us to do this:

      sayHello(); // logs "Hello World!" to the console

Above, we are _calling_ the function sayHello. Notice that we are simply writing the name of the function and placing () parentheses next to it. This causes the _code block_ within the function's _definition_ to be executed. In the case of sayHello, that means printing "Hello, World!" to the console.

_The beauty of putting this code into a function..._
var greeting = 'Hello, World!';
console.log(greeting)
_...is that now we can conveniently execute it again and again by name without having to copy-paste the code inside over and over._
sayHello(); // logs "Hello, World!" to the console
sayHello(); // logs "Hello, World!" to the console
sayHello(); // logs "Hello, World!" to the console

Here is a detailed breakdown of function call syntax:
// [1] [2]
example(arg1, arg2, arg3);

1. The function's name. Again, our function's name is sayHello.
2. A comma-separated list of zero or more _arguments_ surrounded by () parentheses. Our sayHello function does not take any arguments.

Let's look at the sayHello function definition and call side-by-side. What are the major differences?
// defining the sayHello function
function sayHello() {
var greeting = 'Hello, World!';
console.log(greeting);
}

// to call the sayHello function above, we do: sayHello();

PARAMETERS AND ARGUMENTS
Currently, our example sayHello function does a nice job of wrapping up some code into a convenient package. However, it has a major limitation. Wouldn't it be nice if sayHello could greet anyone of our choosing? This would be handy:
sayHello('Bill'); //logs "Hello, Bill!" to the console
sayHello('Ted'); //logs "Hello, Ted!" to the console
sayHello('friend'); //logs "Hello, friend!" to the console

To make this work, we only need to make a small modification to our definition of sayHello:
function sayHello(nickname) { // nickname is a _parameter_
var greeting = 'Hello, ' + nickname + '!';
console.log(greeting);
}
We've defined the function sayHello with the _parameter_ nickname.
You can think of a parameter as a placeholder. It is basically a variable whose value is not known until we _call_ the function and pass an _argument_. When the function's code block is run, the _parameter_ will be holding the value of the _argument_. Here's an example of passing the string "friend" as an _argument_ to sayHello.
sayHello('friend'); // logs "Hello, friend!" to the console.

Here we are _calling_ the function sayHello, with one _argument_: the string 'friend'.
The key thing to remember about _parameters_ and _arguments_ is that when we define a function, we declare _parameters_ and that when we _call_ a function, we pass it _arguments_. Let's look at our definition and call side-by-side.

    //defining the function sayHello with one parameter: nickname

function sayHello(nickname) {
var greeting = 'Hello, ' + nickname + '!';
console.log(greeting);
}

    //calling the function sayHello with one argument: the string 'friend'

sayHello('friend');

RETURNING FROM FUNCTIONS
Another powerful feature of functions is their optional _return_ statement. _return_ does two things for us:

1. Causes the function to produce a value we can use in our program.
2. Prevents any more code in the function's code block from being run.

Consider the following function that takes a firstName and a lastName.
function getFullName(firstName, lastName) {
var fullName = firstName + ' ' + lastName;
return fullName;
}
Instead of a console.log, we see a _return_ statement. A _return_ statement allows us to capture the result of calling getFullName into a variable outside of the function. If we want to, we can log the result to the console later in our code.
Let's compute a full name using our function.

var tj = getFullName('TJ', 'Kinion');
console.log(tj); // logs "TJ Kindion" to the console

*A *return* statement also exits the function. None of the code after the first *return* statement will run, because *return* exits the function.*

NAMING FUNCTIONS
All of the technical rules for naming variables apply to naming functions as well.
A function's name is an opportunity to summarize its code block with a short description. In programming, how you name your variables and functions can make your life easier or harder!
_Be sure to your function's name includes at least a verb. A verb-noun combination is best!_
In general, it's good to make your function names concise, yet descriptive. Functions "make stuff" and "do things" so it makes sense that good function names contain a verb-noun combination. A good function name will help you and others quickly understand the intent of your code.
function start() { // Bad naming choice
function play() { //Still bad
function playVideo() { // Much better! This function most likely plays a video.
functon playVideo(video) { // Best! This function most likely plays any video we choose.
Naming functions is surprisingly tough sometimes, so don't worry if it doesn't come easy. But a good function name makes it easier to guess what the code inside is supposed to do. You'll get the hang of it over time as long as you try.

ANONYMOUS FUNCTIONS
As you may recall, function definitions have an optional name. What does this mean? Well, it means that it is completely valid to define a function with no name. This is known as an anonymous function. Here's an example.
function () {
var greeting = 'Hello, World!';
console.log(greeting);
}

You might be asking yourself, how are you supposed to call this function if you don't know its name? Fair question, but don't worry about it for now. Just know that an anonymous function is still just a function.

MAIN TAKEAWAYS

1. Functions allow you to package up code for use later in your program.
2. Function definitions are made of:


    - the function keyword
    - zero or more parameters
    - a code block
    - an optional return statement

3. Functions are a special kind of object that is "callable"
4. Functions are called with () parentheses and passed zero or more arguments.
5. When a function is called, the parameters in its definition take on the values of the arguments that were passed.
6. A return statement causes the function to produce a value.
7. A return statement also exits the function; no code after the return statement is executed.

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
