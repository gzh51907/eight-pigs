const { MongoClient } = require('mongodb');
const { DBname, DBurl } = require('../config.json');

async function connect() {
    let result = null;
    try {
        //连接数据库
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBname);
        result = { db, client };
    } catch (err) {
        result = err;
    }
    return result;
}

async function create(colName, data) {
    let { db, client } = await connect();
    //连接集合
    let col = db.collection(colName);
    let result = await col.insertMany(data);
    client.close();
    return result;
}

async function remove(colName, data) {
    let { db, client } = await connect();
    //连接集合
    let col = db.collection(colName);
    let result = await col.deleteMany(data);
    client.close();
    return result;
}

async function update(colName, data, newData) {
    let { db, client } = await connect();
    //连接集合
    let col = db.collection(colName);
    let result = await col.updateMany(data, newData);
    client.close();
    return result;
}

async function find(colName, pages, num) {
    let { db, client } = await connect();
    //连接集合
    let col = db.collection(colName);
    let result = await col.find().limit(num - 0).skip(pages * num).toArray();
    client.close();
    return result;
}

async function afind(colName, pages, num, tage, sort = {}, dy = 0, xy = 0) {
    let { db, client } = await connect();
    //连接集合
    let col = db.collection(colName);
    console.log(colName, pages, num, tage, sort, dy, xy);
    let result = null;
    if (sort) {
        if (!dy & !xy) {
            result = await col.find({ tage: tage }).limit(num - 0).skip(pages * num).sort(sort).toArray();
        } else if (!dy) {
            result = await col.find({ price: { $lt: xy - 0 }, tage: tage }).limit(num - 0).skip(pages * num).sort(sort).toArray();
        } else if (!xy) {
            result = await col.find({ price: { $gt: dy - 0 }, tage: tage }).limit(num - 0).skip(pages * num).sort(sort).toArray();
        } else if (dy & xy) {
            result = await col.find({ price: { $gt: dy - 0, $lt: xy - 0 }, tage: tage }).limit(num - 0).skip(pages * num).sort(sort).toArray();
        }
    } else {
        if (!dy) {
            result = await col.find({ price: { $lt: xy - 0 } }).limit(num - 0).skip(pages * num).toArray();
        } else if (!xy) {
            result = await col.find({ price: { $gt: dy - 0 } }).limit(num - 0).skip(pages * num).toArray();
        } else if (dy & xy) {
            result = await col.find({ price: { $gt: dy - 0, $lt: xy - 0 } }).limit(num - 0).skip(pages * num).toArray();
        } else if (!dy & !xy) {
            result = await col.find({ tage: tage }).limit(num - 0).skip(pages * num).toArray();
        }
    }
    client.close();
    return result;
}

module.exports = {
    create,
    remove,
    update,
    find,
    afind
}