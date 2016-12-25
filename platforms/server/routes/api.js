import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import usersCtrl from '../controllers/usersCtrl'
//引入User
import User from '../models/user.js'
const router = new Router()
router.prefix('/api')

router.get('/', indexCtrl)
router.get('/users', usersCtrl)
router.get('/user', async(ctx, next) => {
    var wherestr = {'username' : 'Tracy McGrady'};

    const UserFind = await User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    console.log("UserFind",UserFind)

    ctx.body = {
        status: 0,
        info: 'this a users response!',
        users: UserFind.map(o => ({
          username: o.username,
          userpwd: o.userpwd,
        })),
    }
})

//用户列表
router.get('/user/list', async(ctx, next) => {
    var wherestr = {};
    //列表
    const UserList = await User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    //总数
    const UserListCount = await  User.count(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    ctx.body = {
        status: 0,
        info: 'this a users response!',
        users: {
            list:UserList,
            total:UserListCount
        },
    }
})
//详情
router.get('/user/detail/:id', async(ctx, next) => {
    let id = ctx.params.id;
    console.log(id)
    var wherestr = {
        "_id":id
    };
    //详情
    const UserDetail = await User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    //总数
    ctx.body = {
        status: 0,
        info: 'this a users response!',
        users: {
            list:UserDetail,
        }
    }
})
//创建
router.post('/user/create', async(ctx, next) => {
    console.log("ctx.body",ctx.request.body.username)
    //console.log("this.request.body",this.request.body)
    //var wherestr = {'username' : 'Tracy McGrady'};
    let ctxUsername = ctx.request.body.username;
    let ctxPassword = ctx.request.body.password;
    var wherestr = {
        'username' :ctxUsername,
        'password' :ctxPassword,
    };

    const UserCreate = await User.create(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    console.log("UserCreate",UserCreate)


    ctx.body = {
        status: 0,
        info: 'this a users response!',
    }
})





router.post('/user', async(ctx, next) => {
    console.log("ctx.body",ctx.request.body.username)
    //console.log("this.request.body",this.request.body)
    //var wherestr = {'username' : 'Tracy McGrady'};
    let ctxUserName = ctx.request.body.username;
    var wherestr = {'username' :ctxUserName};

    const UserFind = await User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    console.log("UserFind",UserFind)


    ctx.body = {
        status: 0,
        info: 'this a users response!',
        users: UserFind.map(o => ({
          username: o.username,
          userpwd: o.userpwd,
        })),
    }
})

export default router
