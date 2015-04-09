var fs = require('fs');
var http = require('http');
var connect = require('connect')
var cssnextMiddleware = require('./');
var app = connect();
var serveStatic = require('serve-static');
var fixture = fs.readFileSync(__dirname + '/test/fixture/style.css', 'utf8')

app.use(cssnextMiddleware({
  options: {},
  src: 'test/src',
  dest: 'test/cache'
}));

app.use(serveStatic('test/cache'));

app.listen(3000);

var options = {
    host: 'localhost',
    port: 3000,
    path: '/style.css',
    method: 'GET'
};

var request = http.request(options,function(res) {
  res.setEncoding('utf8');
  res.on('data',function(data) {
    if (data !== fixture) {
      console.error('See: diff test/fixture/style.css test/cache/nstyle.css');
      process.exit(1);
    }
    console.log('Passed all tests');
    process.exit(0);
  });
});

request.end();
