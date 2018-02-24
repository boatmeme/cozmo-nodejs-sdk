class DeviceConnector {
  constructor(opts = {}) {
    const {
      cozmoPort = 5106,
      useEnv = true,
    } = opts;
    this.cozmoPort = cozmoPort;
    if (useEnv && process.env.COZMO_PORT) {
      this.cozmoPort = parseInt(process.env.COZMO_PORT, 10);
    }
  }
}

module.exports = DeviceConnector;
