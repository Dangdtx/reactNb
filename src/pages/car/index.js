import React, { Component } from "react"
import logo1 from "@static/3.png"
import logo4 from "@static/4.png"
import {connect} from "react-redux"
import { list_api } from "@api/home"
import {mapStateToProps,mapDispatchToProps}  from "./connect"
import { RecommonedList, Recommoned, PriceTotal, ShoppingWrapperList, ListHeader, ShoppingWrapper } from "./styled"
 class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            msg: []
        }
    }
    render() {
        let { msg } = this.state;
        let {num,sum,dan} =this.props
        console.log(sum,333)
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
                                <div onClick={this.props.handleCarJ.bind(this)}>-</div>
                                <span>{num}</span>
                                <div onClick={this.props.handleCarSum.bind(this)} >+</div>
                            </div>
                            <div className="shoppingListInfPriceTotal">
                                <span>小计:</span>￥<span>{dan}</span>元
                            </div>

                        </div>
                    </div>

                </ShoppingWrapperList>

                <PriceTotal>

                    <div>金额合计</div>
                    <div>￥<span>{sum}</span>元</div>
                </PriceTotal>

                <Recommoned>为您推荐</Recommoned>


                <RecommonedList>


                    {

                        msg.map((item, index) => (
                            <li key={index}>
                                <img src={"http://oss.static.nubia.cn/"+item.imageurl} alt=""></img>
                                <div className="RecommonedListTitle">{item.product_name}</div>
                                <div className="RecommonedListPrice">
                                    <span>￥{item.price}</span>
                                    <i className="iconfont">&#xe603;</i>
                                </div>
                            </li>
                        ))
                    }





                </RecommonedList>
            </ShoppingWrapper>



        )
    }

    async componentDidMount() {
        let value1 = await list_api();
        let data = value1.data.hot_products;
        console.log(data)
        this.setState({
            msg: data
        })
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList)