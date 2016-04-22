// atom.commands.add 'atom-text-editor',
//   'user:insert-date': (event) ->
//     editor = @getModel()
//     editor.insertText(new Date().toLocaleString())


//console.log('%s: %d','hello',25);
//http server app.js

var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<h1>Node.js</h1>');
  res.write('supervisor');
  res.end('<p>Hello nodejs</p>');
}).listen(3000);
console.log("HTTP Server is listening at port 3000.");
