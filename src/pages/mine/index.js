import React, { Component } from 'react'
import { GoodsWrapper } from "./styled"
import BScrollComponent from "@common/bscroll"
export default class Mine extends Component {
    render() {
        return (
            <BScrollComponent>
            <GoodsWrapper>
                <div className="header">
                    <div className="user_img">
                        <img src="https://oss.static.nubia.cn/upload/59c0c0948d26a56.png"/>
                    </div>
                    <div className="user_name">
                    <div className="login">
                        登录/注册
                    </div>
                    <div className="hy">
                    <span className="left1">
                        
                    </span>
                    <span className="right1">普通会员</span>
                    </div>
                    </div>
                    <div className="message">
                    <img src="//shop-soa-static.nubia.com/images/buy_mobile/message.png"/>
                    </div>
                </div>
                <div className="box">
                <div className="ticket">
                    <ul>
                    <li>
                    <b>0</b>
                    <p>优惠券</p>
                    </li>
                    <li>
                    <b>￥0</b>
                    <p>回收代金券</p>
                    </li>
                    <li>
                    <b>0</b>
                    <p>收藏</p>
                    </li>
                    <li>
                    <b>0</b>
                    <p>积分</p>
                    </li>
                    </ul>
                </div>
                <div className="order">
                    <div className="myorder">
                        <div className="left">
                          我的订单
                        </div>
                        <div className="right">
                        查看全部&gt;
                        </div>
                    </div>
                    <ul className="tp">
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b793ef4969.png"/>
                    </div>
                    <p>待付款</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b795611e76.png"/>
                    </div>
                    <p>待收货</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b795606f26.png"/>
                    </div>
                    <p>已完成</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b795659e4.png"/>
                    </div>
                    <p>回收订单</p>
                    </li>
                    </ul>
                </div>
                <div className="order">
                    <div className="myorder">
                        <div className="left">
                          我的工具
                        </div>
                        <div className="right">
                        
                        </div>
                    </div>
                    <ul className="tp">
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b7955d592.png"/>
                    </div>
                    <p>会员中心</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b79632ab57.png"/>
                    </div>
                    <p>收货地址</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b797bb6195.png"/>
                    </div>
                    <p>我的预约</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b797ae6b40.png"/>
                    </div>
                    <p>NB码</p>
                    </li>
                    
                    </ul>
                     <ul className="tp">
                    <li>
                    <div>
                    <img src="//shop-soa-static.nubia.com/images/medal.png"/>
                    </div>
                    <p>专属勋章</p>
                    </li>
                    <li>
                    <div>
                    
                    </div>
                    <p></p>
                    </li>
                    <li>
                    <div>
                   
                    </div>
                    <p></p>
                    </li>
                    <li>
                    <div>
                    
                    </div>
                    <p></p>
                    </li>
                    
                    </ul>
                </div>
                <div className="order">
                    <div className="myorder">
                        <div className="left">
                          售后服务
                        </div>
                        <div className="right">
                        查看全部&gt;
                        </div>
                    </div>
                    <ul className="tp" id="tip">
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b799bed555.png"/>
                    </div>
                    <p>售后网点</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b799bc3234.png"/>
                    </div>
                    <p>以旧换新</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b799c09b79.png"/>
                    </div>
                    <p>真伪查询</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5b1a23bd3bc2156.png"/>
                    </div>
                    <p>非保障查询</p>
                    </li>
                    
                    </ul>
                     <ul className="tp">
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5b1a23bd4950870.png"/>
                    </div>
                    <p>寄修服务</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5b1a23bd51b4c1.png"/>
                    </div>
                    <p>意外保障服务</p>
                    </li>
                    <li>
                    <div>
                    <img src="//oss.static.nubia.cn/upload/5af40b798965a57.png"/>
                    </div>
                    <p>售后订单</p>
                    </li>
                    <li>
                    <div>
                    <img src=""/>
                    </div>
                    <p></p>
                    </li>
                    
                    </ul>
                </div>
                </div>
            </GoodsWrapper>
            </BScrollComponent>
                    )
                }
            }
