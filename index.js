const logger = require('./logger');
const { fgRed, fgGreen, fgYellow, fgCyan, fgWhite } = require('./styles');

module.exports = {
  error: (...data) => logger(fgRed, ...data),
  success: (...data) => logger(fgGreen, ...data),
  warning: (...data) => logger(fgYellow, ...data),
  info: (...data) => logger(fgCyan, ...data),
  log: (...data) => logger(fgWhite, ...data),
};
