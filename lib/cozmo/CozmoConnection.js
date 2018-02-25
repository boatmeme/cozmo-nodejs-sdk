const log = require('../utils/log')('CozmoConnection');

class CozmoConnection {
  constructor() {
    this._isConnected = false;
    this._isUiConnected = false;
    this._running = true;
    this._robots = {};
    this._primary_robot = undefined;
  }
}
