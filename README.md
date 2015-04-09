# [cssnext](https://github.com/cssnext/cssnext)-connect
Use tomorrow's CSS syntax, today, using cssnext via connect plugin.

## Install
```
npm install --save cssnect-connect
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
