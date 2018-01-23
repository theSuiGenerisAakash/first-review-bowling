const bowling = require('../index');

describe('testing input of valid inputs', () => {
  describe('testing if it"s an array', () => {
    it('testing with a valid array', () => {
      const arrTest = [1, 2, 3];
      expect(bowling.verifyArray(arrTest)).toBe(true);
    });
    it('testing with an empty array', () => {
      const arrTest = [];
      expect(bowling.verifyArray(arrTest)).toBe(true);
    });
    it('testing with null', () => {
      const arrTest = null;
      expect(bowling.verifyArray(arrTest)).toBe(false);
    });
    it('testing with undefined', () => {
      const arrTest = undefined;
      expect(bowling.verifyArray(arrTest)).toBe(false);
    });
    it('testing with {}', () => {
      const arrTest = {};
      expect(bowling.verifyArray(arrTest)).toBe(false);
    });
    it('testing with number', () => {
      const arrTest = 32;
      expect(bowling.verifyArray(arrTest)).toBe(false);
    });
    it('testing with string', () => {
      const arrTest = 'dasda';
      expect(bowling.verifyArray(arrTest)).toBe(false);
    });
  });
  describe('testing if the elements are number', () => {
    it('testing with a valid number', () => {
      const numTest = 22;
      expect(bowling.verifyNum(numTest)).toBe(true);
    });
    it('testing with undefined', () => {
      const numTest = undefined;
      expect(bowling.verifyNum(numTest)).toBe(false);
    });
    it('testing with null', () => {
      const numTest = null;
      expect(bowling.verifyNum(numTest)).toBe(false);
    });
    it('testing with a string', () => {
      const numTest = '22';
      expect(bowling.verifyNum(numTest)).toBe(false);
    });
    it('testing with float', () => {
      const numTest = 32.3;
      expect(bowling.verifyNum(numTest)).toBe(false);
    });
    it('testing with an object', () => {
      const numTest = {};
      expect(bowling.verifyNum(numTest)).toBe(false);
    });
  });
  describe('testing score function', () => {
    it('test 1', () => {
      const arrSum = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(bowling.score(arrSum)).toBe(90);
    });
    it('test 2', () => {
      const arrSum = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6];
      expect(bowling.score(arrSum)).toBe(100);
    });
    it('test 3', () => {
      const arrSum = [3, 6, 10, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6];
      expect(bowling.score(arrSum)).toBe(124);
    });
    it('test 4', () => {
      const arrSum = [10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 8, 10];
      expect(bowling.score(arrSum)).toBe(272);
    });
    it('test 5', () => {
      const arrSum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(bowling.score(arrSum)).toBe(0);
    });
    it('test 6', () => {
      const arrSum = [2, 8, 8, 2, 3, 7, 7, 3, 4, 6, 5, 5, 5, 5, 6, 2, 10, 5, 5, 10];
      expect(bowling.score(arrSum)).toBe(156);
    });
  });
});
