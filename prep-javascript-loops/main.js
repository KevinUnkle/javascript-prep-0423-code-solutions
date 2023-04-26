function whileLoop1() {
  const array1 = [];
  let i = 0;
  while (i < 10) {
    array1.push(i);
    i++;
  }
  return array1;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array2 = [];
  let i = 0;
  while (i < 19) {
    array2.push(i);
    i += 2;
  }
  return array2;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array3 = [];
  for (let i = 0; i < 10; i++) {
    array3.push(i);
  }
  return array3;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  const string1 = 'Time till explosion: ';
  for (let i = 100; i > 0; i--) {
    console.log(string1 + i + '!');
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  const array4 = [];
  for (const element in array4) {
    array4.push('name', 'age', 'hobby', 'invention');
    console.log(element, array4);
  }
  return array4;
}
console.log(forInLoop1());

function forInLoop2(object) {
  const array5 = [];
  for (const element1 in array5) {
    array5.push('Ada LoveLace', 'classic', 'computation', 'analytical engine');
    console.log(element1, array5);
  }
}
console.log(forInLoop2());
