const BinaryReader = require('../../../lib/protocol/buffers/BinaryReader');
const fs = require('fs');
const _ = require('struct-fu');
require('should');

describe('BufferReader', () => {
  describe('.read()', () => {
    it('should read a BinaryMessage', async () => {
      /*
      const data = fs.readFileSync('test/fixtures/DebugPerformanceTick-1.bin').slice(2);

      const result = _.struct([
        _.uint8('tag'),
        _.struct('message', [
          _.uint8('stringLength'),
          _.char('_systemName', 6),
          _.float32('_lastTickTime')
        ])
      ]);
      */
      const data = fs.readFileSync('test/fixtures/RobotState-1.bin').slice(2);

      const result = _.struct([
        _.uint8('tag'),
        _.struct('message', [
          _.struct('pose', [
            _.float32le('_x'),
            _.float32le('_y'),
            _.float32le('_z'),
            _.float32le('_q0'),
            _.float32le('_q1'),
            _.float32le('_q2'),
            _.float32le('_q3'),
            _.uint32le('_originID'),
          ]),
          _.float32le('_poseAngle_rad'),
          _.float32le('_posePitch_rad'),
          _.float32le('_leftWheelSpeed_mmps'),
          _.float32le('_rightWheelSpeed_mmps'),
          _.float32le('_headAngle_rad'),
          _.float32le('_liftHeight_mm'),
          _.float32le('_batteryVoltage'),
          _.struct('_accel', [
            _.float32le('_x'),
            _.float32le('_y'),
            _.float32le('_z'),
          ]),
          _.struct('_gyro', [
            _.float32le('_x'),
            _.float32le('_y'),
            _.float32le('_z'),
          ]),
          _.int32le('_carryingObjectID'),
          _.int32le('_carryingObjectOnTopID'),
          _.int32le('_headTrackingObjectID'),
          _.int32le('_localizedToObjectID'),
          _.uint32le('_lastImageTimeStamp'),
          _.uint32le('_status'),

        ])
      ]);
      console.log(result.unpack(data));
      /*
      '_pose',                  # Anki.PoseStruct3d
    '_poseAngle_rad',         # float_32
    '_posePitch_rad',         # float_32
    '_leftWheelSpeed_mmps',   # float_32
    '_rightWheelSpeed_mmps',  # float_32
    '_headAngle_rad',         # float_32
    '_liftHeight_mm',         # float_32
    '_batteryVoltage',        # float_32
    '_accel',                 # Anki.Cozmo.AccelData
    '_gyro',                  # Anki.Cozmo.GyroData
    '_carryingObjectID',      # int_32
    '_carryingObjectOnTopID', # int_32
    '_headTrackingObjectID',  # int_32
    '_localizedToObjectID',   # int_32
    '_lastImageTimeStamp',    # uint_32
    '_status',                # uint_32
    '_gameStatus',            # uint_8
      */
      /*
      console.log(data)
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
      */
    });
  });
});
