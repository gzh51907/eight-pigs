const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { lastResult } = require('../utils');

Router.route('/guide')
    .get(async (req, res) => { //查
        let { num, pages } = req.query;
        // console.log(num, pages);
        let result = null;
        try {
            result = await mongo.find('guide', pages, num);
        } catch (err) {
            result = err;
        }
        res.send(lastResult({ data: result }));
    })

Router.route('/sight')
    .get(async (req, res) => { //查
        let { num, pages } = req.query;
        let result = null;
        try {
            result = await mongo.find('sight', pages, num);
        } catch (err) {
            result = err;
        }
        res.send(lastResult({ data: result }));
    })

Router.route('/tour')
    .get(async (req, res) => { //查
        let { num, pages, sort, tage, dy, xy } = req.query;
        let result = null;
        try {
            result = await mongo.afind('tour', pages, num, tage, sort = { price: sort - 0 }, dy, xy);
        } catch (err) {
            result = err;
        }
        res.send(lastResult({ data: result }));
    })

module.exports = Router;