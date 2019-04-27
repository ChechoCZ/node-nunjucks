const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

app.use(express.urlencoded({ extended: false}));

nunjucks.configure('src/views', {
  autoscape: true,
  express: app,
  watch: true
});

app.set('view engine', 'njk');

app.use('/', require('./src/routes'));

app.listen(3000);