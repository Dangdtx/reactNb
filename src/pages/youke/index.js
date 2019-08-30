import React, { Component } from 'react'
import { Page } from "./styled"
import { Cate } from "@api/home"
import {Link} from "react-router-dom"
// import {connect} from "react-redux";
// import {mapStateToProps,mapDispatchToProps} from "./connect";
import BScrollComponent from "@common/bscroll"
export default class Youke extends Component {
    constructor(){
    super();
   this.state = {
        weekGoods: [],
        Goods:[],
        id: 1,
        flag:false,
        bom:false
    }
    
}
    render() {
        let { weekGoods , Goods,flag, bom} = this.state;
        
        return (
            < BScrollComponent ref="bscroll">
                <Page>

                    <div className="header">
                        <b className="left">
                            <Link className="icon" to="/home">&lt;</Link>
                            <span>手机</span>
                        </b>
                    </div>
                    <div className="product_sorting">
                        <ul>
                            <li>综合</li>
                            <li>价格
                        <span>0</span>
                            </li>
                            <li onClick={this.handleClick.bind(this)}>筛选
                        <span>0</span>
                            </li>
                            <li className="logo_in">
                                <div className="iconfont" onClick={this.handleClick3.bind(this)}>&#xe634;</div>
                            </li>
                        </ul>
                    </div>
                            {
                                weekGoods.map((item, index) => {
                                    return <Link to={"/goodsDetail/"+item.id +"/" + item.sid} className="wrap" key={index}>
                                        <ul>
                                            <li className="phone-item">
                                                
                                                    <div className="phone_cell">
                                                        <img src={'//oss.static.nubia.cn/' + item.image} />
                                                    </div>
                                                    <div className="phone_desc">
                                                        <div className="title">
                                                            <h3>
                                                                {item.product_name + " " + item.color_name + " " + item.spec_value}
                                                            </h3>

                                                        </div>
                                                        <div className="price">
                                                            <h4>{"￥" + item.origin_price}</h4>
                                                        </div>
                                                    </div> 
                                            </li>
                                        </ul>
                                    </Link>
                                })

                            }
                    <div className="right" style={{display:flag?"block":"none"}}>
                    <div className="left_in" onClick={this.handleClick1.bind(this)}></div>
                    <div className="right_in">
                        <div className="cx">
                            <p>服务</p>
                            <ul>
                                <li>促销</li>
                                <li>仅看有货</li>
                            </ul>
                        </div>
                        <div className="gui">
                        <p>规格</p>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                            </ul>
                        </div>
                        <div className="sideBarActive">
                        <div className="reset">重置</div>
                         <div className="confirm">确定</div>
                         </div>
                    </div>
                    </div>
                    
                         <div className="nav1" style={{display:bom?"block":"none"}} >
                       <ul>
                       {
                        Goods.map((it, index1) => {
                            
                            return  <li key={index1}><Link to={"/goodsDetail/"+it.id +"/" + it.sid}>
                        <div className="box2">
                        <img src={'//oss.static.nubia.cn/' + it.image}/>
                        </div>
                        <div className="bix">
                            <div className="box3">
                             <span> {it.product_name}</span>
                            </div>
                            <div className="box4">
                             <span>{it.spec_value}</span>
                            </div>
                            <div className="box5">
                             <span>{"￥" + it.origin_price}</span>
                            </div>
                        </div>
                      </Link>  </li>
                        
                    })
                }
                       </ul>
                    </div>
                     
                </Page>
            </BScrollComponent>

        )
    }
    handleClick(){
        let val = this.state.flag
        this.setState({
            flag:!val
        })
    }
    handleClick1(){
        
        this.setState({
            flag:false
        })
    }
    handleClick3(){
        let a = this.state.bom
        this.setState({
            bom:!a
            
        })
    }
    async componentDidMount(){

        let data = await Cate();
        this.setState({
            weekGoods:data.data.result
            
        })
        let data1 = await Cate();
        this.setState({
            Goods:data1.data.result
            
        })
        console.log(data.data.result)

        this.refs.bscroll.handlepullingUp(()=>{
            alert(1);

        })
    }
    // async componentDidMount() {
    //     let { id } = this.state;
    //     let data = await Cate();
    //     console.log(data)
    //     // if (data) {
    //     //     this.setState({
    //     //         weekGoods: data.data.result,
                
    //     //     })

    //         // console.log(data.data.result)
    //     // }

    //     // this.refs.bscroll.handlepullingUp(() => {
    //     //     // alert(1);
    //     //     // id: ++id
    //     //     console.log(id)
    //     // })
    // }


}
