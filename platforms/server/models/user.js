/**
 * 用户信息
 */
//var mongoose = require('./index.js'),
var mongoose = require('./index.js'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    password: {type: String},                        //密码
    // userage: {type: Number},                        //年龄
    // logindate : { type: Date}                       //最近登录时间
});
var model = mongoose.model('User',UserSchema);
module.exports = model
