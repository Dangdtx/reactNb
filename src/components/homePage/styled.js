import styled from  "styled-components"

export const HomeContent  = styled.div`
   width:100%;
   height:100%; 
   background:#ccc;
   .banner{
       width:100%;
       height:5.2rem;
      .ant-carousel .slick-slide {
            text-align: center;
            height: 100%; 
            background: #364d79;
            overflow: hidden;

        }
    
        .ant-carousel .slick-slide h3 { 
            width:100%;
            height:100%;
            img{ 
                width:100%;
                height:100%;
            }
         }
       
    }
    .show_big{
        width:100%;
        height:5.4rem;
        padding:.1rem 0 ;
        display:flex;
        justify-content:space-around;
        .show_left{
             width:50%;
             height:100%;
             margin-right:.08rem;
             a{
                 display:block;
                 width:100%;
                 height:100%;
                 img{
                     display:block;
                     width:100%;
                     height:100%;
                 }
             }
         }
         .show_right{
            width:48%;
            height:100%;
            
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            a{
                display:block;
                width:100%;
                height:49%
                img{
                    display:block;
                     width:100%;
                     height:100%;
                }
            }
        }
    }
    .new_list{
        width:100%; 
        .hotSex{
            height:.88rem;
            padding:0 .4rem;
            font-size:.4rem;
            color:#333;
            line-height:.88rem;
        }
        .photo_bar{
            width:100%;
            height:4.06rem;
            a{
                display:block;
                width:100%;
                height:100%;
                img{
                    display:block;
                     width:100%;
                     height:100%;
                }
            }
        }
        .list_cell{
            margin-top:.12rem;
            width:100%; 
            
        margin-bottom:.1rem; 
            ul{
                width:100%; 
                overflow:hidden; 
                
                li{
                    width:50%;
                    height:5.6rem;
                    float:left; 
                    a{
                        display:block;
                        width:100%;
                        height:100%;
                        display:flex;
                        flex-direction:column; 
                        img{
                            display:block;
                            width:100%;
                            height:4rem;
                        }
                        .phone_name{
                            width:100%;
                            height:1.6rem;
                            display:flex;
                            padding-left:.2rem;
                            flex-direction:column; 
                            justify-content:space-around;
                            h3{
                                font-size:.32rem;
                                color:#000;
                            }
                            p{
                                color:#8e8d8d;
                                font-size:.26rem
                            }
                            .phone_price{
                                span{
                                    color:#Ef4123;
                                    font-size:.32rem;
                                    margin-right:.1rem;

                                }
                                del{
                                    color:#8e8d8d;
                                    font-size:.26rem 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .more{
        width:100%;
        height:1rem;
        line-height:.8rem;
        padding-bottom:.16rem 0 ;
        text-align:center;
        a{
            width:100%;
            height:100%;
            display:block;
            font-size:.32rem;
            color:8e8d8d;
        }
    }
       
   
`