# DEPRECATED. Use postcss-middleware instead.

---

# [cssnext](https://github.com/cssnext/cssnext)-connect
Use tomorrow's CSS syntax, today, using cssnext via connect plugin.

[![Build Status](http://img.shields.io/travis/cssnext/cssnext-connect.svg)](https://travis-ci.org/cssnext/cssnext-connect)

## Install
```
npm install --save cssnext-connect
```

## Usage
```js
var cssnextMiddleware = require('cssnext-connect');

app.use(cssnextMiddleware({
  options: {},
  src: 'assets',
  dest: 'cache'
}));

app.use(connect.static('cache'));
```
