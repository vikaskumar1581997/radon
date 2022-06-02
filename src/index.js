const express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 5000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});

