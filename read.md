# Logger

A simple color codded conosle logs

## Usage

The simplest way to do this is to e.g const logger = require("logger"):

``` js
const logger = require('../logger');

logger.error(anthying, error.stack || error, 'foo', ...data);
logger.success(anthying,'foo', ...data);
logger.warning(anthying,'foo', ...data);
logger.info(anthying,'foo', ...data);
logger.log(anthying,'foo', ...data);
```
