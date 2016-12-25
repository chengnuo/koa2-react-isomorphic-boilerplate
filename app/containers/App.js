import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import {Menu, Icon, Switch, Row, Col} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import Header from '../components/Header'
import 'normalize.css'
import '../common/layout.less'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '1'
        }
    }

    // componentWillReceiveProps(){
    //     console.log("componentWillReceiveProps")
    // }
    // shouldComponentUpdate(){
    //     console.log("componentWillReceiveProps")
    // }
    changeTheme(value) {
        this.setState({
            theme: value
                ? 'dark'
                : 'light'
        });
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({current: e.key});

        let Url = "";
        let result = "";
        if(e.keyPath[0]=="home"){
            result='/'
        }else if(e.keyPath[1]){
            result='/'+e.keyPath[1]+'/'+e.keyPath[0]
        }else{
            result='/'+e.keyPath[0]
        }
        this.props.history.push(result)
    }
    render() {
        return (
            <div>
                <Header/> {/*
                  <nav>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/picture'>Picture</Link></li>
                  <li><Link to='/counter'>Counter</Link></li>
                  <li><Link to='/login'>login</Link></li>
                  </nav>
              */}

                 <div className="clearfix">
                    <div style={{"position":"fixed"}}>
                        <Switch checked={this.state.theme === 'dark'} onChange={this.changeTheme.bind(this)} checkedChildren="Dark" unCheckedChildren="Light"/>
                        <br/>
                        <br/>
                        <Menu
                            theme={this.state.theme}
                            onClick={this.handleClick.bind(this)} style={{
                                width: 240
                            }}
                            defaultOpenKeys={['sub1']}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                        >
                            <SubMenu key="sub1" title={< span >  < span >首页< /span> </span >}>
                                <Menu.Item key="home"><span>home</span><span className="chinese">首页</span></Menu.Item>
                                <Menu.Item key="picture">picture</Menu.Item>
                                <Menu.Item key="counter">counter</Menu.Item>
                                <Menu.Item key="login">login</Menu.Item>
                                <Menu.Item key="reg">reg</Menu.Item>
                                <SubMenu key="blog" title="blog">
                                    <Menu.Item key="1">blog</Menu.Item>
                                    <Menu.Item key="2">blog2</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="user" title={< span >  < span >用户管理< /span></span >}>
                            <Menu.Item key="list">列表</Menu.Item>
                            <Menu.Item key="detail">详情</Menu.Item>
                            <Menu.Item key="create">创建</Menu.Item>
                            <Menu.Item key="editor">编辑</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={< span > < span > Navigtion Two < /span></span >}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div style={{"marginLeft":"240px"}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({}))(App)
