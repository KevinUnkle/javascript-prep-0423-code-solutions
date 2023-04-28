/* exported tail */
function tail(array) {
  const [, ...newArray1] = array;
  return newArray1;
}
