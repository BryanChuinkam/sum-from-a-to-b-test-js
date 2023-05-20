
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN

  //base case
  if (fromN === toN) {
    return toN;
  }

  //recursive case
  return fromN + sum(fromN + 1, toN);
}

console.log(sum(3, 7)); // ->25


module.exports = sum;
