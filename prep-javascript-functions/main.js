function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var fullGreeting = getGreeting('World');
console.log('getGreeting Exercise:', fullGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var fullResult = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', fullResult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var fullAnswer = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', fullAnswer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersAnswer = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersAnswer);

function getCircleCircumference(radius) {
  return 2 * 3.14159 * radius;
}
var totalCircumference = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', totalCircumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var fullName = getFullName('Juan ', 'Ramirez');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}
var cubeTotal = cube(5);
console.log('cube Exercise:', cubeTotal);
