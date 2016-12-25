import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Table} from 'antd';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{}
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        fetch('/api/user/list', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            },
            // 设置同源cookies
            //credentials: 'same-origin',
            // 跨域资源共享
            credentials: 'include'
        }).then(response => response.json()).then(json => {
            console.log(json)
            this.setState({
                data:json.users
            })
        })
    }
    render() {
        const { data } = this.state;
        return (
            <div style={{"padding":"20px"}}>
                <Table columns={this.columns} dataSource={data.list}/>
            </div>
        )
    }
    get columns() {
        let self = this;
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',
                render:(text, record, index)=>{
                    console.log(text, record, index)
                    return (
                        <div>{text}</div>
                    )
                },
            },
            {
                title: '详情',
                dataIndex: 'detail',
                render:(text, record, index)=>{

                    return (
                        <div>
                            <Link to={`/user/detail/${record._id}`}>详情</Link>
                        </div>
                    )
                },
            },
        ];
        return columns
    }
}
export default connect(state => ({}))(List)
