const express = require("express")
const Router = express.Router();
const Core = require('@alicloud/pop-core');


Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})



Router.get('/verify', (req, res) => {
    let {
        age
    } = req.query

    var client = new Core({
        accessKeyId: 'LTAI4FsbPLKxXS5UxRzZmTwP',
        accessKeySecret: 'qLL2z9DU8HBAj4DNYzM9FPaDQsvqZf',
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    });

    var params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers": `13143686668}`,
        "SignName": "八只小猪",
        "TemplateCode": "SMS_175485520",
        "TemplateParam": `{\`code\`:\`4623\`}`
    }
    var requestOption = {
        method: 'get'
    };
    client.request('SendSms', params, requestOption).then((result) => {
        res.send(JSON.stringify(result))
    }, (ex) => {
        res.send(JSON.stringify(ex))
    })
})

module.exports = Router;