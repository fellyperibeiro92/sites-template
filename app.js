'use strict';

const express = require('express');
const app = express();
const commom = require('./routes/common');
const device = require('express-device');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

/*---------------------- Proxy reverso de arquivos estáticos ----------------------*/
app.use('/bundle', express.static(__dirname + '/public/bundle'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
/*-------------------------------------------------------------------------------- */


/*--------------------- Config template engine ------------------------------------ */
app.set('view engine', 'ejs');
/*--------------------------------------------------------------------------------- */


/*----------------------------------- Data Parser --------------------------------- */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*--------------------------------------------------------------------------------- */


/*----------------------------------- Helmet config ------------------------------- */
app.use(helmet());
/*--------------------------------------------------------------------------------- */


/*----------------------------------- Gzip config --------------------------------- */
app.use(compression());
/*--------------------------------------------------------------------------------- */


/*--------------------- Detect Device type ---------------------------------------- */
app.use(device.capture());
device.enableDeviceHelpers(app);
device.enableViewRouting(app);
/*---------------------------------------------------------------------------------- */


/*-------------------------- Register routes --------------------------------------- */
app.use('/', commom);
/*---------------------------------------------------------------------------------- */


/*-------------------------------Start server -------------------------------------- */
app.listen(3000, function () {
    console.log('Site listening on port 3000!');
});
/*----------------------------------------------------------------------------------- */
