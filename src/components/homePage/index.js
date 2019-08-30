import React, { Component ,Fragment } from 'react' 
import BScrollComponent from "@common/bscroll"
import {home_api} from "@api/home"
import Service from "@common/service"
import Footer from "@common/footer"
import {HomeContent} from "./styled"
import { Carousel } from 'antd'; 
import "antd/dist/antd.css" 
import {Link,withRouter}   from "react-router-dom" 
   class HomePage extends Component {
    state = {
        goods:[],
        sanBai:[],
        list:[],
        three:[],
        four:[],
        seven:[],
        eight:[],
        five:[],
        banner:[],
    }
    render() {
        let {goods,sanBai ,list,three,four,seven,eight,five,banner} = this.state; 
        console.log(banner)
        return ( 
            <BScrollComponent>
            <HomeContent>  
                <div className="banner"> 
                    <Carousel autoplay>
                         {
                            banner.map((item,index)=>(
                              <div key={index}>
                                <h3><Link key={index} to={"/goodsDetail/"+item.link} >
                                     <img  src={"//oss.static.nubia.cn/"+item.small_image} alt=""/>
                                </Link></h3>
                              </div>
                            ))  
                         }  
                    </Carousel> 
                </div>
                <div className="show_big">  
                    <div className="show_left"> 
                        {
                            sanBai.map((item,index)=>(
                               <Link key={index} to={"/goodsDetail/"+ item.product_id+"/"+item.block_products.spec_id} >  <img src={"//oss.static.nubia.cn/"+item.small_image}  alt=""/> </Link> 
                            ))
                        }
                       
                    </div>
                    <div className="show_right">
                        {
                            three.map((item,index)=>(
                                 <a href="#" key={index}><img src={"//oss.static.nubia.cn/"+item.small_image}  alt=""/></a>
                            ))
                        }
                        {
                            four.map((item,index)=>(
                                 <a href="#" key={index}><img src={"//oss.static.nubia.cn/"+item.small_image}  alt=""/></a>
                            ))
                        }
                         
                    </div>
                </div>
                <div className="new_list">
                    <p className="hotSex">热销机型</p>
                    <div className="photo_bar">
                        {
                            seven.map((item,index)=>(
                                 <a href="#" key={index}><img src={"//oss.static.nubia.cn/"+item.small_image}  alt=""/></a>
                            ))
                        }
                    </div>
                    <div className="list_cell">
                        <ul className="father">
                        {
                            list.map((item,index)=>(
                                <li key={index}><Link key={index} to={"/goodsDetail/s/"+item.block_products.spec_id} >
                                    <img src={"//oss.static.nubia.cn/"+ item.small_image} alt=""/>
                                    <div className="phone_name">
                                            <h3>{item.title}</h3>
                                            <p>高通骁龙958</p>
                                            <div className="phone_price">
                                                <span>￥{item.block_products.price}</span>
                                                <del>{item.block_products.original_price}</del>
                                            </div>
                                    </div>
                                </Link></li>  
                            ))
                        }  
                        </ul>
                    </div>
                </div> 
                <div className="more">
                
                      <Link to="/youke">查看更多手机 ></Link>  
                </div> 
                <div className="new_list">
                    <p className="hotSex">精选配件</p>
                    <div className="photo_bar">
                        {
                            eight.map((item,index)=>(
                                 <a href="#" key={index}><img src={"//oss.static.nubia.cn/"+item.small_image}  alt=""/></a>
                            ))
                        }
                    </div>
                    <div className="list_cell">
                        <ul className="father">
                        {
                            five.map((item,index)=>(
                                <li key={index}><Link key={index} to={"/goodsDetail/s/"+item.block_products.spec_id} >
                                    <img src={"//oss.static.nubia.cn/"+ item.small_image} alt=""/>
                                    <div className="phone_name">
                                            <h3>{item.title}</h3> 
                                            <div className="phone_price">
                                                <span>￥{item.block_products.price}</span> 
                                            </div>
                                    </div>
                                </Link></li>  
                            ))
                        }  
                        </ul>
                    </div>
                </div> 
                <div className="more">
                      <a href="#">查看更多配件和周边产品></a>  
                </div> 
                <Service/>
                <Footer/>
            </HomeContent> 
            </BScrollComponent>
        )
    }
    async componentDidMount(){ 
        let data =await home_api();
        data = data.data;  
        console.log(data) 
        let banner = data["501"];
        let z20 = data["502"];
        let three = data["503"];
        let four = data["504"];
        let list = data["506"];
        let five = data["505"]
        let seven = data["507"];
        let eight = data["508"]
        this.setState({  
            sanBai:z20,
            goods:data,
            list:list,
            three:three,
            four:four,
            seven:seven,
            eight:eight,
            five:five,
            banner:banner,
           
        }) 
        

    }
  
}
export default  withRouter(HomePage)