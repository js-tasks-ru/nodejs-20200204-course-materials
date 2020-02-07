function promise() {
  return Promise.resolve()
    .then(promise)
}

setTimeout(_ => {
  console.log('timeout');
});

function nextTick() {
  process.nextTick(nextTick)
}

promise();
// nextTick();

console.log('end');
