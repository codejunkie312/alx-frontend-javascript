export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    return false;
  }
  return array.every((element) => set.has(element));
}
