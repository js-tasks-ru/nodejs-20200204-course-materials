const fs = require('fs');

fs.open(__filename, _ => console.log('fs1'));
fs.open(__filename, _ => console.log('fs2'));
setTimeout(_ => console.log('st1'), 0);
setTimeout(_ => console.log('st2'), 0);

// setTimeout(_ => console.log('timeout'));
// setImmediate(_ => console.log('immediate'));

