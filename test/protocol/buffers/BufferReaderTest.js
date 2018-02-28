const BufferReader = require('../../../lib/protocol/buffers/BufferReader');
const fs = require('fs');
require('should');

describe('BufferReader', () => {
  describe('.read()', () => {
    it('should read a BinaryMessage', async () => {
      const data = fs.readFileSync('test/fixtures/DebugPerformanceTick-1.bin').slice(2);
      console.log(`Data Length: ${data.length}`);
      let i = 0;

      const msgSize = new Uint8Array(data)[0];
      console.log(`Message Size: ${msgSize}`);
      i += 2;

      const tag = data.readUInt8(i);
      console.log(`Tag: ${tag}`);
      i += 8;

      const strSize = new Uint8Array(data);
      console.log(`String Length: ${strSize}`);
      i += 1;

      const systemName = data.toString('utf8', i, strSize);
      console.log(`systemName: ${systemName}`);
      i += strSize;

    });
  });
});
