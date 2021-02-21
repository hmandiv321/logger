# Logger

A simple color codded conosle logs

## Usage

The simplest way to do this is to e.g const logger = require("logger"):

``` js
const logger = require('../logger');

const anything = [
  {
    "foo": [{ anything }],
  }
]
 try {
   // do something
 } catch (error) {
   logger.error(anything, error.stack || error, 'foo', ...data);
 }

// Other Examples
logger.log('foo');
logger.info(...data);
logger.success(JSON.stringify(anything),'foo', ...data);
logger.warning('foo', ...data);
```
