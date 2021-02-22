const virt = require('./virt');
const {
  reset,
  redString,
  greenString,
  yellowString,
  cyanString,
  whiteString,
} = require('./styles');

const logger = (...data) => console.log(...data, reset);

module.exports = {
  error: (...data) => logger(redString, ...data),
  success: (...data) => logger(greenString, ...data),
  warning: (...data) => logger(yellowString, ...data),
  info: (...data) => logger(cyanString, ...data),
  log: (...data) => logger(whiteString, ...data),
  virt,
};
