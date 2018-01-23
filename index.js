const verifyArray = arr => arr instanceof Array;

const verifyNum = num => (typeof num === 'number' ? (num % 1 === 0) : false);

const verify = arr => (verifyArray(arr) ? arr.every(num => verifyNum(num)) : false);

const score = (allThrows) => {
  let scoreSum = 0;
  if (verify(allThrows) === true) {
    const len = allThrows.length;
    let curr = 1;
    let prev = 0;
    let noOfFrames = 0;

    for (; prev < len - 2;) {
      if (allThrows[prev] === 10) {
        scoreSum += 10 + allThrows[curr] + allThrows[curr + 1];
        prev += 1;
      } else if (allThrows[curr] + allThrows[prev] < 10) {
        scoreSum += allThrows[curr] + allThrows[prev];
        prev += 2;
        curr = prev + 1;
      } else if (allThrows[curr] + allThrows[prev] === 10) {
        scoreSum += 10 + allThrows[curr + 1];
        prev += 2;
        curr = prev + 1;
      }
      curr = prev + 1;
      noOfFrames += 1;
    }
    if (noOfFrames !== 10 && len - prev === 2) {
      scoreSum += allThrows[curr] + allThrows[prev];
    }
  }
  return scoreSum;
};

score([3, 6, 10, 10, undefined, 6, 3, 6, 3, null, 3, 6, 3, 6, 10, 3, 6]);
module.exports = {
  verifyArray, verifyNum, score,
};
