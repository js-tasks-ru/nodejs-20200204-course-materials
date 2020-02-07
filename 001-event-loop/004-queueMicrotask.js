console.log("console.log-1"); // 1

setTimeout(() => {
  console.log('setTimeout'); //7
}, 0);

queueMicrotask(() => {
  console.log('queueMicrotask'); // 4
});

new Promise((resolve, reject) => {
  console.log('new Promise'); // 2
  resolve();
}).then( // microtask
  _ => {
    console.log('then'); // 5
  }).finally( // microtask
  _ => {
    console.log('finally'); //6
  }
);

console.log('console.log-2'); // 3

