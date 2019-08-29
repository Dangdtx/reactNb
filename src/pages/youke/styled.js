import styled from "styled-components";
export const Page =styled.div`
    .sc-bwzfXH hlWAUd{
        width:100%;
        height:100%
        overflow:auto;
        z-index:10;
    }
    .header{
        width:100%;
        height:1.2rem;
        display:flex; 
        font-size:0.4rem;
        border-bottom:0.01rem solid #ccc;
        z-index:10;
        background:#fff;
    }
    .left{
        height:100%;
        width:1.2rem;
        margin-left:0.14rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon{
        padding:0.02rem;
    }
    .product_sorting{
        width:100%;
        height:0.96rem;
        ul{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            li{
                width:1.68rem;
                height:0.96rem;
                font-size:0.33rem;
                text-align:center;
                line-height:0.96rem;
            }
        }
    }
    .logo_in{
        width:2.96rem;
        height:100%;
        .iconfont{
            width:1.2rem;
            height:100%;
            float:right;
            font-size:0.44rem;
            text-align:center;
        }
    }
    .wrap{
        width:100%;
        height:100%;
        overflow:auto;
        border-bottom:0.01rem solid;
    }
   .phone-item{
       width:100%;
       height:2.24rem;
       display:flex;
        justify-content:space-around;
        align-items:center;
        a{
            width:100%;
            height:100%;
            display:flex;
        justify-content:space-around;
        align-items:center;
        }
   }
   .phone_cell{
       width:30%;
       height:100%;
       img{
           width:85%;
           height:85%;
       }
   }
   .phone_desc{
       width:70%;
       height:100%;
       float:right;
       padding:0.22rem 0;
   }
   .title{
       font-size:0.3rem;
       font-weigth:700;
       color:#000;
   }
   .price{
       color:red;
       height:0.52rem;
       margin-top:0.6rem;
       h4{
           width:1rem;
           height:0.52rem;
          font-size:0.4rem; 
       }
   }
   .right{
       position:fixed;
       top:0;
       left:0;
       width:100%;
       height:100%;
        z-index:100;
        
        
        
   }
   .left_in{
       width:30%;
       height:100%;
        z-index:-1;
       background:#000;
        opacity: 0.5;
        float:left;
   }
   .right_in{
       float:left;
       width:70%;
       height:100%;
        background-color:#fff;
        z-index:10;
    
    position: absolute;
    right: 0;
    top: 0px;
    background: white;
    padding: 0.5em 0.3em;
    
   }
   .cx{
    margin-bottom:0.3rem;
       p{
           font-size:0.28rem;
           color:#ccc;
           margin-bottom:0.3rem
       }
       ul{
           font-size:0.28rem;
           width: 100%;
           height:0.74rem;
           display: flex;
           justify-content: space-around;
           align-items: center;
           flex-wrap: wrap;
           li{
               height:100%;
               width:1.5rem;
                text-align:center;
                line-height:0.74rem;
                background:rgb(244,244,244);
           }
       }
   }
   .gui{
       width:100%;
       height:5rem;
       p{
        font-size:0.28rem;
        color:#ccc;
        margin-bottom:0.3rem
       }
       ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        li{
            font-size:0.28rem;
            width:30%;
            height:0.74rem;
            background:rgb(244,244,244);
            text-align:center;
            line-height:0.74rem;
            margin-top:0.2rem;

        }
       }
   }
   .sideBarActive{
    width: 100%;
    height: 3.5em;
    display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    div{
        font-size:0.30rem;
        width:50%;
        height:0.8rem;
        text-align:center;
        line-height:0.8rem;
    }
   }
   .reset{
       background:#ccc;
   }
   .confirm{
       background:red;
   }

   .nav1{
       position:fixed;
       top:2.16rem;
       left:0;
       background:#fff;
       width:100%;
       height:100%;
       z-index:20;
       ul{
           width:100%;
           height:100%
           display: flex;
           justify-content: space-around;
           align-items: center;
           flex-wrap: wrap;
           li{
               width:48%;
               height:5.85rem;
               background:#fff;
           }
       }
   }
   .bix{
       width:100%;
       height:2rem;
   }
   .box2{
       width:100%;
       height:3.74rem;
       background:#ccc;
       img{
           width:100%;
           height:100%;
       }
   }
   .box3{
        width:100%;
        height:0.4rem;
        span{
            display:block;
            width:100%;
            height:100%;
            font-size:0.3rem;
        }

   }
   .box4{
        width:100%;
        height:0.44rem;
        span{
            display:block;
            width:100%;
            height:100%;
            font-size:0.2rem;
        }
   }
   .box5{
        width:100%;
        height:0.4rem;
        span{
            display:block;
            width:100%;
            height:100%;
            font-size:0.3rem;
        }
   }
`
