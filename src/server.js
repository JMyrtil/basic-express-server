'use strict'

const express = require('express');
const handleError = require('./errorhandlers/500');
const handleNotFound = require('./errorhandlers/404');
// const capitalize = require('./modules/capitalize');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const cors = require('cors');
const app = express();

app.use(cors());


app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Touch me HARDAHH!!!');
});

app.get('/person', validator, (req, res) => {
  
  const name = {name: req.query.name} ;

  res.status(200).json(name);
});

app.use(handleError);
app.use('*', handleNotFound);

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};
