var path = require("path");
var url = require("url");
var fs = require("fs");
var cssnext = require("cssnext");
var mkdirp = require("mkdirp");
var _  = require("lodash");

module.exports = function (opts) {
  opts = _.defaults(opts || {}, {
    options: {},
    src: 'assets',
    dest: 'cache'
  });

  return function(req, res, next) {
    var pathname = path.normalize(url.parse(req.url).pathname);
    var src  = path.join(opts.src, pathname);
    var dest = path.join(opts.dest, pathname);
    var resSend = function (output) {
      res.setHeader('Content-Type', 'text/css');
      res.end(output);
    }

    fs.readFile(src, 'utf8', function (err, data) {
      if (err) return next(err);
      var output = cssnext(data, opts.options);
      mkdirp(path.dirname(dest), function (err) {
        if (err) return next(err);
        fs.writeFile(dest, output, function (err) {
          if (err) return next(err);
          return resSend(output);
        });
      });
    });
  };
};
