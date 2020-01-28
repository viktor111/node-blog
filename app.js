const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const indexRouter = require('./router/index');

const server = require('./config/server');
const errorHandler = require('./config/errorHandler');
const mongoose = require('mongoose');

//const client = require('./config/dbConnect');

const app = express();

mongoose.connect('mongodb+srv://viktor:viktor11@cv-app-sdkha.gcp.mongodb.net/blog?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to database blog mongoose')
});

// set view engine
app.set("view engine","jade");

// set up public folder
app.use(express.static(path.join(__dirname, 'public')));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secert-cookie-for-auth',
    name: 'auth',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

// use router
app.use('/', indexRouter);

app.use('/',(res, req ) => {
});

//start server
if (app.listen(server.PORT)){
    console.log(`Node server listen on ${server.PORT}`);

}
else {
    // if error restart server on new port
    errorHandler.listenHandler(app, server.onErrorPort);
}
