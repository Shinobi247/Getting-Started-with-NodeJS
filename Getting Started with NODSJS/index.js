const Logger = require('./Logger');

const logger = new Logger();

logger.on('message', data => console.log("Called Listner: ",data));

logger.log('Hello World!');
logger.log('Hi!');
logger.log('Hello!');