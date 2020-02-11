const {createReadStream, createWriteStream} = require('fs');
const path = require('path');

const FILE_NAME = path.resolve(process.cwd(), './data/3-law.txt');

const readStream = createReadStream(FILE_NAME + '11111111111111111');
const writeStream = createWriteStream(`${FILE_NAME}.bak`);

/* pipe method */

readStream.pipe(writeStream).on('error', err => {
  console.log(`Write error ${err.message}`);
});
// writeStream.on('error', ...)

readStream.on('error', err => {
  console.log(`Read error: ${err.message}`);
});

readStream.once('close', () => {
  console.log("Stream closed");
});
