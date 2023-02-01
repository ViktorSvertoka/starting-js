function findMatches(array, ...values) {
  const matches = [];
  for (let value of values) {
    if (array.indexOf(value) !== -1) {
      matches.push(value);
    }
  }
  return matches;
}
