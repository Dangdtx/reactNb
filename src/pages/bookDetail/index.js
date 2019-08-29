import React, { Component ,Fragment} from "react";
import { Footer,BookSelected, AfterSales, DetailWrapper, Imgscroll, BookDetailInf, BookeDetailScore, BookDetailSales, BookDetailSaleAddress } from "./styled"
import { book_name_api } from "@api/home.js"
export default class BookDetail extends Component {
    constructor() {
        super();
        this.state = {
            msg:{}
        }
    }
    render() {
        let {msg} = this.state;
        console.log(msg,"111111aaaaa")
        return (
            <Fragment>
            
            
           
            <DetailWrapper>
                <Imgscroll>
                    <img src="http://img3m0.ddimg.cn/64/6/23990140-1_e_7.jpg" alt=""></img>
                </Imgscroll>



                <BookDetailInf>
                    <div className="bookDetailName">
                        <span>当当自营</span>
                        <span></span>
                    </div>
                    <div className="bookDetailIntroduce">
                        <span>如果不惩罚，不骄纵地有效管教孩子，畅销没过我多万册，被翻译成16种语言畅销全球；让数百万孩子、父母和老师受益终身的经典之作；自1981年本书出版以来,《正面管教》已经成为管教的图书。。。</span>
                    </div>
                    <div className="promoWrapper">
                        <div className="promo">
                            <span>2020健康日历5折购，2本叠码ZKBMAB立减5元</span>
                        </div>
                    </div>

                    <div className="bookDetailPrice">
                        <div className="bookDetailPriceInf">
                            <div className="bookDetailPriceInfLeft">
                                <div className="solePrice">
                                    <span>￥</span>
                                    <span className="newPrice">19.00</span>
                                </div>
                                <span className="oldPriceSole">(5.00折)</span>
                                <div className="selePriceNotice">
                                    <div>降价通知</div>
                                </div>

                            </div>
                            <div className="bookDetailPriceInfRight">电子书￥<span className="electronicPrice">12.99</span></div>
                        </div>
                        <div className="bookDetailOldPrice">定价<span className="oldPrice">￥38.00</span></div>
                    </div>

                    <div className="packageMail"><span>包邮</span></div>


                </BookDetailInf>


                <BookeDetailScore>
                    <div className="bookDetailScoreL">
                        <div className="bookDetailScoreLScore">
                            <span>9.4</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="bookDetailScoreLRecord">
                            <span>891887人评分</span>
                            <span>精彩评分送积分</span>
                        </div>
                    </div>
                    <div className="bookDetailScoreR">我要写评论</div>
                </BookeDetailScore>



                <BookDetailSales>
                    <div className="bookDetailSalesL">
                        <div className="sales">促销</div>
                        <div className="bookDetailAddPriceShop">
                            <div className="addPriceShop"><span>加价购</span><span>加6.40~49.00元换购热销商品</span></div>
                            <div className="addPriceShop"><span>加价购</span><span>加6.40~49.00元换购热销商品</span></div>
                        </div>
                    </div>
                    <div>></div>
                </BookDetailSales>



                <BookDetailSaleAddress>
                    <div className="bookDetailSaleAddressL">
                        <div className="sendTo">送至:</div>
                        <div className="bookDetailSaleAddressLDetail">
                            <div>北京>北京市>东城区</div>
                            <div>23:15前下单，预计明天送达</div>
                            <div>免运费</div>
                        </div>
                    </div>
                    <div className="bookDetailSaleAddressR">></div>


                </BookDetailSaleAddress>


                <AfterSales>
                    <ul>
                        <li>. 当当发货&售后</li>
                        <li>. 正品保障</li>
                        <li>. 支持礼品卡</li>
                        <li>. 支持7日无理由退货</li>
                        <li>. 礼品包装</li>
                    </ul>

                </AfterSales>




                <BookSelected>
                    <span>已选</span>
                    <span>正面管教(新版）</span>
                    <span>⬇</span>
                </BookSelected>


                


            </DetailWrapper>

            <Footer>
                    <div>
                        <i className="iconfont icon-xin"></i>
                        <span>收藏</span>
                    </div>
                    <div>
                        <i className="iconfont icon-icon22fuzhi"></i>
                        <span>购物车</span>
                    </div>
                    <div>立即购买</div>
                    <div>加入购物车</div>


                </Footer>
            </Fragment>
        )
    }

    async componentDidMount() {
        let data = await book_name_api();


        this.setState({
            msg:data
        })
        console.log(data, "11111")
    }
}