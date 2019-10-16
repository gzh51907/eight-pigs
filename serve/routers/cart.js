const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { lastResult } = require('../utils');

Router.route('/cart')
    .get(async (req, res) => { //查
        let { num, pages, sort, des } = req.query;
        // console.log(num, pages, sort, des);
        let result = null;
        try {
            result = await mongo.dfind('cart');
        } catch (err) {
            result = err;
        }
        res.send(lastResult({ data: result }));
    })
    

module.exports = Router;