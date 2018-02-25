const DeviceConnector = require('./DeviceConnector');
const log = require('../utils/log')('AndroidConnector');
const adb = require('adbkit');

class AndroidConnector extends DeviceConnector {
  constructor(opts = {}) {
    const { serial, ...rest } = opts;
    super(rest);
    this._serial = serial;
    this.client = adb.createClient();
  }

  async _connected() {
    const forwards = await this.client.listForwards();
    return forwards.map(({ serial }) => serial);
  }

  async _devices() {
    const devices = this.client.listDevices();
    return devices.map(({ id }) => id);
  }

  async _addForward(serial) {
    const portSpec = `tcp:${this.cozmoPort}`;
    log('Adding forward local:%o to remote:%o to Android device: %o', portSpec, portSpec, serial);
    const result = await this.client.forward(serial, portSpec, portSpec);
    return result;
  }

  async connect() {
    const devices = await this._devices();
    const connected = await this._connected();
    // eslint-disable-next-line no-restricted-syntax
    for (const serial of devices) {
      log('Checking connection to Android device: %o', serial);

      if (connected.includes(serial)) {
        log('Already connected to Android device: %o', serial);
        // eslint-disable-next-line no-continue
        continue;
      }
      // eslint-disable-next-line no-continue
      if (this._serial && serial.toLowerCase() !== this._serial.toLowerCase()) {
        // eslint-disable-next-line no-continue
        continue;
      }

      await this._addForward(serial); // eslint-disable-line no-await-in-loop
    }
  }
}

module.exports = AndroidConnector;
