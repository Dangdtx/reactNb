import React, { Component } from 'react' 
import {HeadersWrapper} from "./styled"
import {connect} from "react-redux"
import {Page} from "@common/commonStyled"
import {mapStateToProps, mapDispatchToProps} from "./connect"
 class Search extends Component {
    render() {
        let {hotGoods,flag} = this.props
        console.log(hotGoods,flag)
        return (
            <HeadersWrapper>
                <div className="header">
                    <div className="header_left">
                        <a href="#"> 返回</a>   
                    </div>
                    <div className="header_center"  >
                        <span className="iconfont">&#xe60b;</span>
                        <input type="text"   placeholder="红星照耀中国" />
                    </div>
                    <div className="header_right">
                        <a href="#">
                            <div className="iconfont">搜索</div>
                        </a>
                    </div>
                </div>
                <div className="hot" style={ {display:flag?'block':'none'}} >
                    <p>热门搜索</p>
                    <ul>
                        {
                            hotGoods.map((item,index)=>(
                                <li key={index}><a href="">{item.product_name}</a></li>
                            ))
                            
                        }
                        
                    </ul>
                </div>
            </HeadersWrapper>

        )
    }
componentDidMount(){
    this.props.handleHotSearch();
}




}
export default connect(mapStateToProps,mapDispatchToProps)(Search)