const { runProgram } = require('../lib/cozmo');
require('should');

describe('Cozmo SDK for Node.js', () => {
  describe('.runProgram()', () => {
    it('should handle functions that return values', async () => {
      const val = 10;
      const result = await runProgram(() => val);
      result.should.eql(val);
    });
  });
});
