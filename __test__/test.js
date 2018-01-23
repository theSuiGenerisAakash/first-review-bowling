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
});
