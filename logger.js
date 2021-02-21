const { reset } = require('./styles');

module.exports = (color, ...data) => console.log(color, ...data, reset);
