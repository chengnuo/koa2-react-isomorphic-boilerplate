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
    //const userfind = await User.find({'username' : 'Tracy McGrady'})
    //console.log("userfind",userfind)

    // let user = new User({
    //     username: 'Tracy McGrady', //用户账号
    //     userpwd: 'abcd', //密码
    // });
    // user.save(function(err, res) {
    //
    //     if (err) {
    //         console.log("Error:" + err);
    //     } else {
    //         console.log("Res:" + res);
    //     }
    // });

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

export default router
