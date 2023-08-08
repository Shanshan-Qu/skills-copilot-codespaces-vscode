//Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var path = require('path');
var multer = require('multer');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
var ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');
var credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var port = process.env.PORT || 3000;
var port2 = process.env.PORT || 3001;
var io = require('socket.io').listen(httpsServer);
var server = httpsServer.listen(port, function () {
    console.log('Server listening at port %d', port);
});
var server2 = httpServer.listen(port2, function () {
    console.log('Server listening at port %d', port2

