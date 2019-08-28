import React, { Component } from 'react'
import {ServiceWrapper} from "./styled" 
export default class Service extends Component {
    render() {
        return (
            <ServiceWrapper>
                <div className="service">
                    <h2>联系客服</h2> 
                        <a href="/live800.php?a=showchatbox" className="serviceCard">
                            <i className="serviceIcon"></i> 
                            <div className="serviceInfo">
                                <div>
                                    <p className="serviceTitle">在线客服</p> 
                                    <p className="serviceMessage">7*24小时 全年无休</p>
                                </div>
                                <i className="arrowIcon"></i>
                            </div>
                        </a> 
                        <a href="tel:4007006600" className="serviceCard"><i className="phoneIcon"></i> <div className="serviceInfo"><div><p className="serviceTitle">客服热线400-700-6600</p> <p className="serviceMessage">周一至周日 8:30-20:30 全年无休</p></div> <i className="arrowIcon"></i></div></a>
                    </div>
            </ServiceWrapper>
        )
    }
}
