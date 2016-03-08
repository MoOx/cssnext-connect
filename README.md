# DEPRECATED. Use postcss-middleware instead.

---

# [cssnext](https://github.com/cssnext/cssnext)-connect

[![Join the chat at https://gitter.im/cssnext/cssnext-connect](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cssnext/cssnext-connect?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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
