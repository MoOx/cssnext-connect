var connect = require('connect')
var cssnextMiddleware = require('./');
var app = connect();
var serveStatic = require('serve-static');

app.use(cssnextMiddleware({
  options: {},
  src: 'test',
  dest: 'test/cache'
}));

app.use(serveStatic('test/cache'));

app.listen(3000);
