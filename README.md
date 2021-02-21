# Logger

A simple color codded conosle logs

### example taken from repl console, color may differ in e.g vs code console.
![image](https://user-images.githubusercontent.com/51318320/108618203-0ea26f80-73ea-11eb-8530-4cc2e8e5ee7d.png)

## Usage

The simplest way to do this is to e.g const logger = require("logger"):

``` js
const logger = require('../logger');

 try {
   // do something
 } catch (error) {
   // red color 
   logger.error(anything, error.stack || error, 'foo', ...data);
 }
```
### Other Examples
``` js
// red color 
logger.error('foo)

//white color
logger.log('foo');

//cyan color
logger.info(data);

//green color
logger.success(data,'foo');

//yellow color
logger.warning('foo');
```
