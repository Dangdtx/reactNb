import React,{Component} from "react"
import logo1 from "@static/3.png"
import logo4 from "@static/4.png"

import {list_api} from "@api/home"
import {RecommonedList,Recommoned,PriceTotal,ShoppingWrapperList,ListHeader,ShoppingWrapper} from "./styled"
export default class ShoppingList extends Component {
    render() {
        return (
            <ShoppingWrapper>
                <ListHeader>
                    <i className="iconfont">&#xe665;</i>
                    <span>购物车</span>
                    <i className="iconfont">&#xeb61;</i>
                </ListHeader>
                <ShoppingWrapperList>

                    <img src={logo1} alt=""></img>

                    <div className="shoppingListInf">
                        <div className="shoppingListInfTitle"><span>红魔Mars( 10GB+256GB 迷彩色)</span><i>x</i></div>
                        <div className="soldPrice"><span>售价</span>￥<span>2999</span>元</div>
                        <div className="numPriceTotal">
                            <div className="shoppingListInfNum">
                                <div>-</div>
                                <span>1</span>
                                <div>+</div>
                            </div>
                            <div className="shoppingListInfPriceTotal">
                                <span>小计:</span>￥<span>2999.00</span>元
                            </div>
                            
                        </div>
                    </div>
                
                </ShoppingWrapperList>
            
                <PriceTotal>
                
                    <div>金额合计</div>
                    <div>￥<span>2999</span>元</div>
                </PriceTotal>

                <Recommoned>为您推荐</Recommoned>


                <RecommonedList>
                
                    <li>
                        <img src={logo4} alt=""></img>
                        <div className="RecommonedListTitle">律音耳机（新版）</div>
                        
                        <div className="RecommonedListPrice">
                        <span>￥69</span>
                        <i className="iconfont">&#xe603;
                        </i>
                        </div>
                    </li>



                   
                </RecommonedList>
            </ShoppingWrapper>


            
        )
    }

    async componentDidMount() {
        let ggg=await list_api();
        console.log(ggg,"ggg")
       
    }

    
}