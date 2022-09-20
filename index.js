'use strict';

const express = require('express');
const app = express(); // this is our app singleton
require('dotenv').config();
const PORT = process.env.PORT

app.listen(PORT || 3000, function(){
  console.log("Express server listening on port in developer mode", PORT);
});

// request parameter
app.get('/params/:name', (request, response) => {
  let name = request.params.name;
  response.json({
    name,
  });
});

// query parameters
app.get('/query', (request, response) => {
  let name = request.query.name;
  let role = request.query.role;
  response.json({
    name,
    role,
  });
});

app.get('/hello', (request, response) => {
  response.json({
    name: 'JACOB',
  });
});


module.exports = app;
