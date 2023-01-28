function makeArray(firstArray, secondArray, maxLength) {
  let newArray = [];
  let i = 0;
  let j = 0;
  while (
    i < firstArray.length &&
    j < secondArray.length &&
    newArray.length < maxLength
  ) {
    if (i < firstArray.length) {
      newArray.push(firstArray[i]);
      i++;
    }
    if (j < secondArray.length) {
      newArray.push(secondArray[j]);
      j++;
    }
  }
  return newArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
