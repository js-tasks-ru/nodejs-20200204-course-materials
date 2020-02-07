const {EventEmitter} = require('events');

const ee = new EventEmitter();
ee.emit('event', 'hello-1');
ee.on('event', console.log);

class MyEmitter extends EventEmitter {
  constructor() {
    super()
  }
}

const myEE = new MyEmitter();
myEE.emit('some-custom-event', 'hello-2');
myEE.on('some-custom-event', console.log);

