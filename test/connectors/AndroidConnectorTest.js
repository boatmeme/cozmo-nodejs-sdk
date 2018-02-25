const AndroidConnector = require('../../lib/connectors/AndroidConnector');
require('should');

describe('AndroidConnect', () => {
  describe('_devices', async () => {
    it('should get a list of all adb devices', async () => {
      const ac = new AndroidConnector();
      const devices = await ac._devices();
      devices.should.be.an.Array();
    });
  });
  describe('connect', async () => {
    it('should return a connection to a device', async () => {
      const ac = new AndroidConnector();
      const conn = await ac.connect();
      console.log(conn);
    });
  });
});
