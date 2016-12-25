import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import React from 'react'

import App from './containers/App'
import Picture from './components/Picture'
import Counter from './containers/Counter'
import Login from './components/Login'
import Reg from './components/Reg'
import Blog from './components/Blog'

import UserList from './containers/user/list'
import UserDetail from './containers/user/detail'
import UserCreate from './containers/user/create'


export default(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="picture" component={Picture}/>
            <Route path="counter" component={Counter}/>
            <Route path="login" component={Login}/>
            <Route path="reg" component={Reg}/>
            <Route path="blog/(:id)" component={Blog}/>

            <Route path="user">
                <IndexRoute component={UserList}/>
                <Route path="list" component={UserList}/>
                <Route path="detail(/:id)" component={UserDetail}/>
                <Route path="create" component={UserCreate}/>
            </Route>
        </Route>
    </Router>
)
