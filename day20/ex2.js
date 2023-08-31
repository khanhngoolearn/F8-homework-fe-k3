function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        return acc.concat(flattenArray(curr));
      } else {
        return acc.concat(curr);
      }
    }, []);
}
  
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);
  
console.log(flattenedArray);