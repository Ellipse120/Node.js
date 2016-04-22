var fs = require('fs');

fs.readFile('shell.txt','utf-8',function(err,data){
  if (err) {
    console.error(err);
  }else {
    console.log(data);
  }
});
console.log('end.');
