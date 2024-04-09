export default function appendToEachArrayValue(array, appendString) {
  const tempArray = [];
  for (const value of array) {
    tempArray.push(appendString + value);
  }

  return tempArray;
}
