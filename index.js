const verifyArray = arr => arr instanceof Array;

const verifyNum = num => (typeof num === 'number' ? (num % 1 === 0) : false);

const verify = arr => (verifyArray(arr) ? arr.every(num => verifyNum(num)) : false);

const score = (allThrows) => {
  if (verify(allThrows) === false) {
    return false;
  }
  const len = allThrows.length;
  let curr = 1;
  let prev = 0;
  let scoreSum = 0;
  let lastSum = 0;
  for (; prev < len - 2;) {
    if (allThrows[prev] === 10) {
      lastSum = 10 + allThrows[curr] + allThrows[curr + 1];
      scoreSum += lastSum;
      curr += 2;
      prev += 1;
    } else if (allThrows[curr] + allThrows[prev] < 10) {
      lastSum = allThrows[curr] + allThrows[prev];
      scoreSum += lastSum;
      curr += 2;
      prev += 2;
    } else if (allThrows[curr] + allThrows[prev] === 10) {
      lastSum = 10 + allThrows[curr + 1];
      scoreSum += lastSum;
      curr += 2;
      prev += 2;
    }
  }
  scoreSum += allThrows[curr] + allThrows[prev];
  return scoreSum;
};

module.exports = {
  verifyArray, verifyNum, score,
};
