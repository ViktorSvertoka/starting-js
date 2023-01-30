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
