const {createReadStream} = require('fs');
const path = require('path');

const FILE_NAME = path.resolve(process.cwd(), './data/3-law-short.txt');

const readStream = createReadStream(FILE_NAME, {highWaterMark: 5, encoding: 'utf-8'});

let data = '';
readStream.on('data', chunk => {
  // console.log(typeof chunk);
  // console.log(chunk.length);
  data += chunk
});

readStream.once('close', () => {
  console.log("Stream closed");
  // console.log(Buffer.concat(data).toString('utf-8'));
  console.log(data);
});
