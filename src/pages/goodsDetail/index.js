import React, { Component } from "react"
import { SelectedProject,Footer, Parameter, Overview, OverviewParameterNav, GoodsDetailOverviewParameter, Choiced, Sales, GoodsDetailSales, GoodsDetail, GoodsDetailImg, GoodsDetailInf } from "./styled"
import logo2 from "@static/2.png"
import { goodsDetail_api } from "@api/home"
export default class GoodsDetailWrapper extends Component {
    constructor() {
        super();
        this.state = {
            msg: {},
            lgs:[],
            flag:true
        }
    }
    render() {
        let {msg,lgs,flag} = this.state;
        let id = this.props.match.params.id
        
        let num;
        lgs.forEach((item,index)=>{
                        if(item.id==id) {
                           num=index;
                        }
                    })
        let tibel=lgs[num]
        console.log(tibel,"111111111111111saamsg")
      
        return (
            <GoodsDetail>
                <GoodsDetailImg>
                    <img src={logo2}></img>
                </GoodsDetailImg>


                <GoodsDetailInf>
                    
                      
                           <div>
                                
                                <div>6+128GB降至2799、8+128GB降至2999、12+256GB降至3799</div>
                                <div>
                                <span>￥2999.00元</span>
                                <span>￥3499.00元</span>
                                </div>
                           </div>
                      
                    

                </GoodsDetailInf>

                <GoodsDetailSales>
                    <Sales>
                        <div>促销</div>
                        <ul>
                            <li>
                                <span>分期</span><span>享受花呗3期,12期分期</span>
                            </li>
                            <li>
                                <span>积分</span><span>购买即赠积分，积分可抵现</span>
                            </li>
                            <li>
                                <span>包邮</span><span>铜牌及以下满59、银牌满39、金牌包邮</span>
                            </li>
                        </ul>
                    </Sales>
                    <Choiced onClick={this.clickHandler.bind(this)}>
                        <div>已选</div>
                        <span>赤焰红 8GB+12GB 仅手机 x <span>1</span></span>
                    </Choiced>
                </GoodsDetailSales>
                <GoodsDetailOverviewParameter>
                    <OverviewParameterNav>
                        <div>概述</div>
                        <div>参数</div>
                    </OverviewParameterNav>

                    <Overview>

                    </Overview>

                    <Parameter>


                    </Parameter>

                    <SelectedProject style={{display:flag?'block':'none'}}>
                    
                    
                    
                    </SelectedProject>

                </GoodsDetailOverviewParameter>
                <Footer>
                    <li>
                        <i className="iconfont"></i>
                        <span>客服</span>
                    </li>
                    <li>
                        <i></i>
                        <span className="iconfont">收藏</span>
                    </li>
                    <li>
                        <i></i>
                        <span className="iconfont">购物车</span>
                    </li>
                    <li>
                        <span className="iconfont">缺货登记</span>
                    </li>


                </Footer>

            </GoodsDetail>
        )
    }

    async componentDidMount() {
        let value = await goodsDetail_api();
        let data = value.data
        this.setState({
            msg: data,
            lgs:data.product_specs
        })
    }

    clickHandler(e) {
        let bool = this.state.flag
        this.setState({
            flag:!bool
        })
    }
}