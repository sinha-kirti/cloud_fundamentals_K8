'use strict';

const createApp = require('./app');
const FortuneCookieService = require('./fortune-cookie-service');

const config = {
    connectionString: process.env.mypath //'postgres://postgres@localhost/postgres'
};

createApp(new FortuneCookieService(config)).listen(process.env.PORT || 3000);
