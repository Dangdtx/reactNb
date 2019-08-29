import React, { Component } from 'react'
import { Sort, SortHeader, SortBody, SortBodyNav, SortBodyDetail, SortBodyDetailList } from "./styled"
import {sort_api} from "@api/home"
import {Link} from "react-router-dom"
export default class SortWrapper extends Component {
    constructor() {
        super();
        this.state={
            msg:[]
        }
    }
    render() {
        let {msg} = this.state;
        return (
            <Sort>
                <SortHeader>
                    <div>
                        <i className="iconfont">&#xe629;</i>
                        <span>红魔3</span>
                    </div>
                    <div><i className="iconfont">&#xe663;</i></div>

                </SortHeader>

                <SortBody>
                    <SortBodyNav>

                        <ul>
                            {
                                msg.map((item,index)=>(
                                    <li key={index} onClick={this.navClickHandler.bind(this,index)}>{item.cate_name}</li>
                                ))
                            }
                        </ul>
                    </SortBodyNav>

                    <SortBodyDetail ref="scroll">
                        {
                            msg.map((item,index)=>(
                                <SortBodyDetailList key={index}>
                                    <div className="sortBodyDetailTitle">
                                        <i>--------</i>
                                        <span>{item.cate_name}</span>
                                        <i>--------</i>
                                    </div>
 
                                    <ul >
                                        {
                                            item.infos.map((child,idx)=>(
                                                <li>
                                                    <Link to={"/goodsDetail/"+child.product_id+"/"+child.spec_id}>
                                                        <img src={"//oss.static.nubia.cn/"+child.image_id}></img>
                                                        <span key={idx}>{child.product_name} {child.color_name}</span>
                                                    
                                                    </Link>
                                                    
                                                </li>
                                            ))
                                        }                     
                                    </ul>
                            </SortBodyDetailList>
                            ))
                        }
                        
                        <div>查看更多周边</div>

                    </SortBodyDetail>

                    

                </SortBody>

            </Sort>
        )
    }
    async componentDidMount() {
        let value = await sort_api();
        let data=value.data.result
        console.log(data,1111111)
        this.setState({
            msg:data
        })
    }
    navClickHandler(index) {
        let idx = index;
        let letters =  this.refs.scroll.querySelectorAll(".sortBodyDetailTitle");
        console.log(letters.srcollTop,idx)

        this.refs.scroll.srcollTop = 0
    } 
    
}
