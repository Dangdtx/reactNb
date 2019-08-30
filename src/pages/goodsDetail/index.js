import React, { PureComponent } from "react"
import {SelectedProjectBody,SelectedProjectButton,SelectedProjectNum,SelectedProjectinstallment,SelectedProjectService,SelectedProjectsuit,SelectedProjectSpecifications,SelectedProjectColor,SelectedProjectHeader, SelectedProject,Footer, Parameter, Overview, OverviewParameterNav, GoodsDetailOverviewParameter, Choiced, Sales, GoodsDetailSales, GoodsDetail, GoodsDetailImg, GoodsDetailInf } from "./styled"
import logo2 from "@static/2.png"
import { goodsDetail_api } from "@api/home"
import { Carousel } from 'antd'; 
import "antd/dist/antd.css" 
export default class GoodsDetailWrapper extends PureComponent {
    constructor() {
        super();
        this.state = {
            msg: {},
            lgs:[],
            banner:[],
            flag:false
        }
    }
    render() {
        let {msg,lgs,flag,banner} = this.state;
        let id = this.props.match.params.id
        console.log(banner)
        let num;
        lgs.forEach((item,index)=>{
                        if(item.id==id) {
                           num=index;
                        }
                    })
        let tibel=lgs[num] 
      
        return (
         
            <GoodsDetail>
                <GoodsDetailImg  onClick={this.clickOtherHandler.bind(this)}>
                    <Carousel autoplay>
                        {
                            banner.map((item,index)=>(
                                <div key={index}>
                                <h3><a key={index}   >
                                    <img  src={"//oss.static.nubia.cn/"+ item } alt=""/>
                                </a></h3>
                                </div>
                            ))  
                        }  
                    </Carousel> 
                </GoodsDetailImg>


                <GoodsDetailInf>
                    <h2>{tibel?tibel.id:""}</h2>
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
                        <SelectedProjectHeader>
                            <img src = {logo2} alt = ""></img>
                            <div className="title">
                                <div>
                                    <span>￥2599.00</span> 
                                    <span>￥2799.00</span> 
                                </div>
                                <div>红魔3 玄铁黑 6GB+128GB</div>
                            </div>
                        
                        </SelectedProjectHeader>
                        <SelectedProjectBody>
                      

                        <SelectedProjectColor>
                            <span className="title">颜色</span>
                            <div>玄铁黑</div>
                            <div>赤焰红</div>
                            <div>战地迷彩版</div>
                            <div>红蓝竞技版</div>
                            <div>迷彩钢枪版（套装）</div>
                            
                        </SelectedProjectColor>

                        <SelectedProjectSpecifications>
                            <span className="title">规格</span>

                            <div>12GB+258GB</div>
                            <div>12GB+258GB</div>
                            <div>12GB+258GB</div>

                        </SelectedProjectSpecifications>
                        <SelectedProjectsuit>
                            <span className="title">套装</span>

                                <div>
                                    <span>手机套装</span>
                                    <span>¥2999.00，省¥428.00</span>
                                </div>
                                <div>
                                    <span>能量套装</span>
                                    <span>¥2999.00，省¥428.00</span>

                                </div>
                                <div>
                                    <span>仅手机</span>
                                </div>
                                
                        </SelectedProjectsuit>
                        <SelectedProjectService>
                            <span className="title">服务(可选）</span>
                            <div>
                                <span>红魔3玄铁黑（6G+128G）屏碎宝（半年内保修1次）</span>
                                <span>99.00元/年</span>
                            </div>
                            <div>
                                <span>红魔3玄铁黑（6G+128G）屏碎宝（半年内保修1次）</span>
                                <span>99.00元/年</span>
                            </div>

                        
                        
                        
                        </SelectedProjectService>
                        <SelectedProjectinstallment>
                        
                        <span className="title">分期</span>
                            <div>
                                <span>￥1005.27×3期</span>
                                <span>含￥67.80手续费</span>
                            </div>
                            <div>
                                <span>￥1005.27×3期</span>
                                <span>含￥67.80手续费</span>
                            </div>
                        
                        
                        </SelectedProjectinstallment>
                        <SelectedProjectNum>
                            <span className="title">数量</span>
                            <div>-</div>
                            <div>1</div>        
                            <div>+</div>        

                        </SelectedProjectNum>
                        <SelectedProjectButton>
                                确定
                        
                        </SelectedProjectButton>


                          
                        
                        
                        </SelectedProjectBody>
                    
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
       let {productId,id} = this.props.match.params
      
        let value = await goodsDetail_api(productId,id);
        console.log(value, 66666)
        let data = value.data
        this.setState({
            msg: data,
            lgs:data.product_specs,
            banner:data.product_specs[0].images,
        })
    }

    clickHandler(e) {
        e.stopPropagation();
        this.setState({
            flag:true
        })
    }
    clickOtherHandler(e) {
        e.stopPropagation();
        this.setState({
            flag:false
        })
    }
}