const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { lastResult } = require('../utils');

Router.route('/')
    .get(async (req, res) => { //查
        let result = null;
        try {
            result = await mongo.dfind('cart');
        } catch (err) {
            result = err;
        }
        res.send(lastResult({ data: result }));
    })
    .post(async (req, res) => {
        let { query } = req.body;
        let result = await mongo.create('cart', [ query ]);
        if (result.ops.length) {
            //插入成功
            res.send(lastResult({}));
        } else {
            res.send(lastResult({ code: 0 }));
        }
    });

Router.route('/:id')
    .delete(async (req, res) => {
        let { id } = req.body;
        let result = await mongo.remove('cart', { id });
        if (result.ops.length) {
            //插入成功
            res.send(lastResult({}));
        } else {
            res.send(lastResult({ code: 0 }));
        }
    })
    .patch(async (req, res) => {
        let { id, data } = req.body;
        let result = await mongo.update('cart', { id }, { data });
        if (result.ops.length) {
            //插入成功
            res.send(lastResult({}));
        } else {
            res.send(lastResult({ code: 0 }));
        }
    });

module.exports = Router;