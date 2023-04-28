/* exported reverse */
function reverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const value1 = array[i];
    reversedArray.push(value1);
  }
  return reversedArray;
}
