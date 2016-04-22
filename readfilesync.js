// readFile sync.js

var fs = require('fs');
var data = fs.readFileSync('shell.txt');

console.log(data);

console.log('end......');
