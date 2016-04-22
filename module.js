// module.js

var name;

exports.setName = function(thyName) {
  name = thyName;
  console.log(name);
};

exports.sayHello = function() {
  console.log('Hello ' + name);
};
