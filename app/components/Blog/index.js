import React, {Component} from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Modal,
    Card,
    Tag
} from 'antd';
import min from './min.jpg'
import { Link } from 'react-router'
const FormItem = Form.Item;

class Blog extends Component {
    componentDidMount(){
        this.loadData();
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        this.loadData();
        console.log("componentDidUpdate")
    }
    loadData(){
        fetch('/api/user', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            },
            body:JSON.stringify({
                username:"Tracy McGrady",
                password:"abcd",
            }),
            // 设置同源cookies
            //credentials: 'same-origin',
            // 跨域资源共享
            credentials: 'include'
        })
        .then(response => response.json())
        .then(
            json => {
                console.log(json)
            }
        )

    }
    render() {
        console.info("blog",this)
        return (
            <div id="column-center" style={{"padding":"10px"}}>
                <article className="markdown">
                    <h1>我的博客</h1>
                    <section>
                        <div className="noteinfo">
                            <Link to="" className="media-left avatar">
                                <img src={min} />
                            </Link>
                            <h2 className="media-heading" data-toggle="charline">
                                <Link to="" className="author_link link_blue">
                                    零度沈
                                </Link>
                                <span className="splitline">|</span>
                                <Link to="" >
                                    随便说点什么吧...
                                </Link>
                            </h2>
                            <div className="media-info clearfix">
                                <span className="hide">
                                    发布于
                                    <span className="cm_datetime">
                                    前天&nbsp;18:06
                                    </span>
                                </span>
                                <em className="ml0">浏览：</em>
                                <span>208</span>
                                <em>回复：</em>
                                <span>10</span>
                                <em>分类：</em>
                                <span>
                                    <Link to="">
                                        <Tag color="#00d8ff">react</Tag>
                                        <Tag color="#80bd01">nodejs</Tag>
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="media clearfix">
                            <p className="media-body">
                                今天研究一个小问题：怎么拿到JavaScript异步函数的返回值？错误尝试当年未入行时，我的最初尝试：html代码效果预览
                            </p>
                        </div>
                    </section>

                </article>
            </div>
        )
    }
}

export default Blog
