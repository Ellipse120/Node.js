// singleobject.js

function Hello(){
  var name;

  this.setName = function(thyName) {
    name = thyName;
  };

  this.sayHello = function() {
    console.log('Hello singleobject ' + name);
  };
};

exports.Hello = Hello;
