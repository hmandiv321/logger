const {
  reset,
  redString,
  greenString,
  yellowString,
  cyanString,
  whiteString,
} = require('./styles');

const logger = (...data) => console.log(...data);

module.exports = {
  error: (...data) => logger(redString, ...data, reset),
  success: (...data) => logger(greenString, ...data, reset),
  warning: (...data) => logger(yellowString, ...data, reset),
  info: (...data) => logger(cyanString, ...data, reset),
  log: (...data) => logger(whiteString, ...data, reset)
};
