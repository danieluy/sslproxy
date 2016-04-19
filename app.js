var http = require("http");

function reqHandler(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('SSL funciona!');
}

var server = http.createServer(reqHandler);

server.listen(8080, function(){
   console.log(
      '/////////////////////////////////////////////\n' +
      '//                                         //\n' +
      '//   Server listening on: localhost:3000   //\n' +
      '//       Press Ctrl-C to terminate         //\n' +
      '//                                         //\n' +
      '/////////////////////////////////////////////'
   );
});
