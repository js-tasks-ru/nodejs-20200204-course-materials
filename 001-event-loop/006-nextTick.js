
setTimeout(() => {
  console.log('setTimeout-1');
}, 10);

setImmediate(() => {
   console.log('setImmediate');
});

queueMicrotask(() => {
  console.log('queueMicrotask-1');
});

process.nextTick(() => {
  console.log('nextTick');
});

/**
  nextTick: [nT]
  micro: [qM]
  immediate: [sI]
  timer: [sT]
 */
