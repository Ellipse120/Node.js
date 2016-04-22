// loadmodule.js
// 单次加载 

var hello1 = require('./module');
hello1.setName('Ellipse');

var hello2 = require('./module');
hello2.setName('Hyperbola');

hello1.sayHello();
