const express = require('express');
const routes = express.Router();

const checkQueryParam = (req, res, next) => {
  if (!req.query.age ) {
    return res.redirect('/');
  }
  return next();
}

routes.get('/', (req, res) => {
  return res.render('index');
});

routes.post('/check', (req, res) => {
  if (req.body.age > 18) {
    return res.redirect(`/major?age=${req.body.age}`);
  } else {
    return res.redirect(`/minor?age=${req.body.age}`);
  }
});

routes.get('/major', checkQueryParam, (req, res) => {  
  return res.send(`You are an Adult and You are ${req.query.age} years old.`);
});

routes.get('/minor', checkQueryParam, (req, res) => {
  return res.send(`You are under-age and You are ${req.query.age} years old.`);
});

module.exports = routes;