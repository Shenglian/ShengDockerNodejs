'use strict';

var express = require('express');

// Constants
const PORT = 5000;
// App
var  app = express();
app.get('/', function (req, res) {
   res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
