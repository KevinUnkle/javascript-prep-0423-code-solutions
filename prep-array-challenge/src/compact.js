/* exported compact */
function compact(array) {
  const newArray1 = [];
  for (const key of array) {
    if (key) {
      newArray1.push(key);
    }
  }
  return newArray1;
}
