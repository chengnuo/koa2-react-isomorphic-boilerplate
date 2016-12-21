/**
 * Created at 16/5/20.
 * @Author Ling.
 * @Email i@zeroling.com
 * http://www.cnblogs.com/zhongweiv/p/mongoose.html
 */

//import mongoose from 'mongoose';
var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/mongoosesample';

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});


module.exports = mongoose;
