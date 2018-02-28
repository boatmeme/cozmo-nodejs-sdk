class BufferReader {
  constructor(buffer = Buffer.alloc(0)) {
    this._buffer = buffer;
    this._index = 0;
  }

  length() {
    return this._buffer.length;
  }
}

module.exports = BufferReader;
