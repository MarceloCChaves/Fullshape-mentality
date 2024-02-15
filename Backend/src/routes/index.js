const express = require('express');

const treinos = require('./TreinosRoute');
const usuario = require('./users/UsersRoute');
const comunidade = require('./communities/CommunitiesRoutes');
const auth = require('./authRoute');

module.exports = app => {
  app.use(
    express.json(),
    auth,
    usuario,
    treinos,
    comunidade,
  );
}