import React, { Component } from 'react'
import {HeadersWrapper} from "./styled"
import logo from "@static/logo.png"
export default class Headers extends Component {
    render() {
        return (
            <HeadersWrapper>
                <div className="header_left">
                    <a href="#">
                        <img src= {logo} alt=""/>
                    </a>
                </div>
                <div className="header_center">
                    <span className="iconfont">&#xe60b;</span>
                    <input type="text"  placeholder="红星照耀中国"/>
                </div>
                <div className="header_right">
                    <a href="#">
                        <div className="iconfont">&#xe634;</div>
                    </a>
                </div>
            </HeadersWrapper>
        )
    }
}
