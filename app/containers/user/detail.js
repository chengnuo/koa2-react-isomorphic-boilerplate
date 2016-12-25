import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                
            }
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        let params = this.props.params.id;
        fetch('/api/user/detail/' + params, {
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
            this.setState({data: json.users})
        })
    }
    render() {
        const {data} = this.state;
        const dataList = data && data.list || []
        console.log(this)
        return (
            <div style={{
                "padding": "20px"
            }}>
                <div>详情</div>
                <div>
                    {
                        dataList.length > 0
                        ? <ul>
                                <li>id：{dataList[0]._id}</li>
                                <li>用户名：{dataList[0].username}</li>
                            </ul>
                        : null
                    }
                </div>
            </div>
        )
    }
}
export default connect(state => ({}))(Detail)
