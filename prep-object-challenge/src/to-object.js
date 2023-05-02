/* exported toObject */
function toObject(keyValuePair) {
  const object1 = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  object1[key] = value;
  return object1;
}
