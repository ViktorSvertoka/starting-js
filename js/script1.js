function countProps(object) {
  let propCount = 0;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      propCount++;
    }
  }
  return propCount;
}
