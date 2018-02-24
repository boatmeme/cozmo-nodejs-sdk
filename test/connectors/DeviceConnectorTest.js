const DeviceConnector = require('../../lib/connectors/DeviceConnector');
require('should');

const defaultPort = 5106;

describe('DeviceConnector', () => {
  describe('constructor', () => {
    it('should set Cozmo Port', async () => {
      const port = 5107;
      const dc = new DeviceConnector({ cozmoPort: port });
      dc.should.have.property('cozmoPort').eql(port);
    });
    it(`should default Cozmo Port to ${defaultPort}`, async () => {
      const dc = new DeviceConnector();
      dc.should.have.property('cozmoPort').eql(defaultPort);
    });
    it('should use ENV by default', async () => {
      const port = 5109;
      process.env.COZMO_PORT = port;
      const dc = new DeviceConnector({ cozmoPort: 9999 });
      process.env.COZMO_PORT = undefined;
      dc.should.have.property('cozmoPort').eql(port);
    });
    it('should not use ENV, if useEnv is false', async () => {
      const port = 5109;
      process.env.COZMO_PORT = port;
      const dc = new DeviceConnector({ useEnv: false });
      process.env.COZMO_PORT = undefined;
      dc.should.have.property('cozmoPort').eql(defaultPort);
    });
    it('should use ENV, if useEnv is true', async () => {
      const port = 5109;
      process.env.COZMO_PORT = port;
      const dc = new DeviceConnector({ cozmoPort: 9999, useEnv: true });
      process.env.COZMO_PORT = undefined;
      dc.should.have.property('cozmoPort').eql(port);
    });
  });
});
