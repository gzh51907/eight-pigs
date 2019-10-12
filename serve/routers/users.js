const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { lastResult, token } = require('../utils');

// 查询所有用户
Router.get('/', async (req, res) => {
    let result = await mongo.find('users');
    res.send(lastResult({ data: result }));
})

//查询是否存在该用户名
Router.get('/check', async (req, res) => {
    let { username } = req.query;
    let result = await mongo.find('users', { username });
    if (result.length) {
        //查询成功
        res.send(lastResult({ code: 0 }));
    } else {
        res.send(lastResult({}));
    }
})

//注册新用户
Router.post('/reg', async (req, res) => {
    let { username, password } = req.body;
    let result = await mongo.create('users', [{ username, password, regtime: Date.now() }]);
    if (result.ops.length) {
        //插入成功
        res.send(lastResult({}));
    } else {
        res.send(lastResult({ code: 0 }));
    }

})

//登录账号
Router.post('/login', async (req, res) => {
    let { username, password, mdl } = req.body;
    let result = await mongo.find('users', { username, password });
    if (result.length) {
        //查询成功
        let Authorization = '';
        if (mdl == 1) {
            Authorization = token.create(username);
            res.send(lastResult({ data: Authorization }));
        } else {
            res.send(lastResult());
        }
    } else {
        res.send(lastResult({ code: 0 }));
    }

})

//删除账号
Router.delete('/', async (req, res) => {
    let { username } = req.body;
    let result = await mongo.remove('users', { username });
    if (result.result.n > 0) {
        //删除成功
        res.send(lastResult());
    } else {
        res.send(lastResult({ code: 0 }));
    }

})

module.exports = Router;