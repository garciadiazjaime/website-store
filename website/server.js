#!/bin/env node
var express = require('express'),
    app = express(),
    path = require("path"),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    apiRoutes = require('./routes/api'),
    config = require('./config'),
    routes = require('./routes');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', config.get('storeURL'));
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/api/', apiRoutes);


app.set('ipaddress', config.get('ipaddress'));
app.set('port', config.get('port'));


app.listen(app.get('port'), app.get('ipaddress'), function(err) {
    if (err) throw err;
    console.log('Listening on ' + app.get('ipaddress') + ':' + app.get('port') + '...');
});
