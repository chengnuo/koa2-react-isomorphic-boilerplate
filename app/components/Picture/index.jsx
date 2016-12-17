import React, { Component } from 'react'
import large from './large.jpg'
import min from './min.jpg'
import { DatePicker,Button } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;



export default class ExampleComponent extends Component {
    componentDidMount(){

    }
    handleClick(){
        console.log("2")
    }
    onChange(date, dateString) {
      console.log(date, dateString);
    }
    render () {
        return (
            <ul>
                <li>large: <img src={large} /></li>
                <li>min: <img src={min} /></li>
                <li>
                <DatePicker onChange={this.onChange.bind(this)} />
                <Button type="primary" onClick={this.handleClick.bind(this)}>Primary</Button>
                </li>
            </ul>
        )
    }
}
