const logger = require('./logger');
const { fgRed, fgGreen, fgYellow, fgCyan, fgWhite } = require('./styles');

module.exports = {
  /**
   * @description logs to the console in red colored text
   */
  error: (...data) => logger(fgRed, ...data),
  /**
   * @description logs to the console in green colored text
   */
  success: (...data) => logger(fgGreen, ...data),
  /**
   * @description logs to the console in yellow colored text
   */
  warning: (...data) => logger(fgYellow, ...data),
  /**
   * @description logs to the console in cyan colored text
   */
  info: (...data) => logger(fgCyan, ...data),
  /**
   * @description logs to the console in white colored text
   */
  log: (...data) => logger(fgWhite, ...data),
};