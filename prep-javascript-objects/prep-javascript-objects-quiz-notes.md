# prep-javascript-objects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What data types can object properties hold?
  Object properties can hold strings, numbers, booleans, arrays, functions, and others.
- Describe the syntax (structure) of object-literals in JavaScript.
  There are two ways to write object-literals in JavaScript, either horizontally or vertically.
  const person = {firstName:"John", lastName:"Stevens", age:55, eyeColor:"blue"};
  or
  const person {
  firstName: "John",
  lastName: "Stevens",
  age: 55,
  eyeColor: "blue",
  };

## Notes

All student notes should be written here.

JAVASCRIPT OBJECTS
Objects are one of the fundamental building blocks of JavaScript. An object uses named properties which generally describe the data they hold.

One of the primary reasons for this structure is that it allows for modeling of real world structures. For example, if you wanted to model a person in an object it could be something like this:

const human = {
firstName: 'Paul';
lastName: 'Atreides';
favoriteFood: 'spice';
age: 35
};

Notice there are properties for human attributes such as first name, last name, and age.
Objects are very useful for modeling things in the real world by grouping values together in one place.

_It is common practice to declare objects with the const keyword_

You define and create a JavaScript object with an object literal:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

_Spaces and line breaks are not important. An object can span multiple lines_
EX: const person = {
firstName: "John",
lastName: "Doe",
age: 50,
eyeColor: "blue",
}

The name:value pairs in JavaScript objects are called _properties_
Property Property Value
firstName John
lastName Doe
age 50
eyeColor blue

ACCESSING OBJECT PROPERTIES
You can access object properties in two ways:

          objectName.propertyName           =           person.lastName;

          or

          objectName["propertyName"]        =           person["lastName"];

_JavaScript objects are containers for named values called properties_

There are a couple different ways to access and create properties on objects: 1. dot notation 2. bracket notation

You can retrieve property values using "DOT NOTATION":
const firstName = human.firstName;
console.log("the human's first name is", firstName)'

You can add or update property values using "DOT NOTATION":
human.fear = null;
console.log('the human is afraid of', human.fear);

You can also retrieve property values using "BRACKET NOTATION":
const lastName = human['lastName']
console.log("the human's last name is; lastName);

And you can add or update property values using "BRACKET NOTATION":
human['middleName'] = 'Danger';
console.log("the human's middleName is", human['middleName']);

_Objects are variables too. But objects contain many values._

The code below assigns many values (Fiat, 500, white) to a variable named car:
const car = {type:"Fiat", model:"500", color:"white"};

The values ^ are written as name:value pairs with no space, only separated by a colon.

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
