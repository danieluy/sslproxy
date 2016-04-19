var http_proxy = require('http-proxy');
var https = require('https');
var fs = require('fs');

var options = {
   key: fs.readFileSync('./sslcert/privkey.pem').toString(),
   cert: fs.readFileSync('./sslcert/newcert.pem').toString()
};

var proxy = new http_proxy.createProxyServer({
   target:{
      host: 'localhost',
      port: 8080
   }
});

var server = https.createServer(options, function(req, res){
   proxy.web(req, res);
});

server.listen(8443, function(){
   console.log(
      '///////////////////////////////////////////////////\n' +
      '//                                               //\n' +
      '//   Secure proxy listening on: localhost:8443   //\n' +
      '//           Press Ctrl-C to terminate           //\n' +
      '//                                               //\n' +
      '///////////////////////////////////////////////////'
   );
});
