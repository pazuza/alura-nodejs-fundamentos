require('marko/node-require').install();
require('marko/express');

const express = require('express'),
      app     = express(),
      rotas   = require('../app/rotas/rotas');

rotas(app);

module.exports = app;