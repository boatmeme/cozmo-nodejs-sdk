class BinaryReader {
  constructor(buffer = Buffer.alloc(0)) {
    this._buffer = buffer;
    this._index = 0;
  }

  read(format) {
    // "Reads in a single value of the given format."
    return this.readFArray(format, 1)[0];
  }
/*
  readFArray(format, length) {
    //Reads in a fixed-length array of the given format and length."
    reader = _get_struct(format, length)
    if self._index + reader.size > len(self._buffer):
        raise IndexError('Buffer not large enough to read serialized message. Received {0} bytes.'.format(
            len(self._buffer)))
    result = reader.unpack_from(self._buffer, self._index)
    self._index += reader.size
    return result
  }
*/
  tell() {
    return this._index;
  }

  length() {
    return this._buffer.length;
  }
}

module.exports = BinaryReader;
