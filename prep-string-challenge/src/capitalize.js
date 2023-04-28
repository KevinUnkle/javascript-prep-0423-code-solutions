/* exported capitalize */
function capitalize(word) {
  const newString = word.charAt(0).toUpperCase(0) + word.slice(1).toLowerCase();
  return newString;
}
