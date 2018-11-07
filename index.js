'use strict';

console.log('Hello there');
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  console.log('http get ??????');
  res.send('Hello World');
});

app.listen(3000);
