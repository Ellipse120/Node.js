// gethello.js

//var Hello = require('./Hello');
var Hello = require('./singleobject').Hello;


hello = new Hello();
hello.setName('Hyperbola');
hello.sayHello();
