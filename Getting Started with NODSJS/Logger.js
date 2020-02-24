const EventEmitter = require('events');


const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg){
        // Call emit
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;