'use strict';

const express = require('express');

const create = function (fortuneCookieService) {
    return express().get('/', async function (req, res, next) {
        try {
            const quote = await fortuneCookieService.quote();
            res.set('Content-Type', 'text/plain').send(quote);
        } catch (error) {
            next(error);
        }
    });
};

module.exports = create;
