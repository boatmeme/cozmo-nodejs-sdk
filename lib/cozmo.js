const SdkConn = {
  waitForRobot: () => new Promise((resolve) => setTimeout(resolve, 50)),
}

const runProgram = async (fn) => {
  const robot = await SdkConn.waitForRobot();
  return fn(robot);
}

module.exports = {
  runProgram
}
