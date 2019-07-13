const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var testVar = 5;

        expect(isRealString(testVar)).toBe(false);
    });

    it('should reject strings with only spaces', () => {
        var testVar = '       ';

        expect(isRealString(testVar)).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        var testVar = '    sdsd   ';

        expect(isRealString(testVar)).toBe(true);
    });
});
