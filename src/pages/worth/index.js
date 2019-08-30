import React, { Component } from 'react'
import { GoodsWrapper } from "./styled"
import {Link} from "react-router-dom"
export default class Worth extends Component {
    render() {
        return (
            <GoodsWrapper>
                <div className="header">
                <div className="left">
                    <img src="https://static.nubia.cn/mobile/images/m_logo.png"/>
                </div>
                <div className="right">
                <ul>
                <li>1</li>
                <li>2</li>
                </ul>
                </div>
                </div>
                <div className="middle">
                    <div className="tu">
                        <img src="//static.nubia.cn/mobile/images/emptycart.png"/>
                        <h3>购物车还是空的</h3>
                        <p>现在去选购吧</p>
                    </div>
                    <div className="bottom">
                        <div className="zhong">
                        <Link to="/car">
                            去逛逛
                        </Link>
                        </div>
                    </div>
                </div>
            </GoodsWrapper>
        )
    }
}
