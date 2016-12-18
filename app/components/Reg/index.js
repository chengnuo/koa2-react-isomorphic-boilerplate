import React, {Component} from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Modal
} from 'antd';
const FormItem = Form.Item;

class Reg extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                Modal.info({title: '提示', content: (
                        <div>
                            <h3>注册成功,请妥善保管</h3>
                            <ul>
                                <li>你的用户名：{values.userName}</li>
                                <li>你的密码：{values.password}</li>
                                <li>你的确认密码：{values.confirm}</li>
                            </ul>
                        </div>
                    )});
            }
        });
    }
    checkPassowrd(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致');
        } else {
            callback();
        }
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id="components-form-demo-normal-login">
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入用户名'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "user" />} placeholder="请输入用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "lock" />} type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认密码'
                                }, {
                                    validator: this.checkPassowrd.bind(this)
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "lock" />} type="password" placeholder="请确认密码"/>
                        )}
                    </FormItem>
                    <FormItem>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>

                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(Reg)
