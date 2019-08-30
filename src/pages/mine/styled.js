import styled from "styled-components"

export const GoodsWrapper = styled.div`
    
    .header{
        width:100%;
        height:2.48rem;
        background-color: #000;
        position:relative;
        img{
            width:1.2rem;
            height:1.2rem;
            position: absolute;
            left: 0.44rem;
            bottom: 0.5rem;
            
        }
        .user_name{
            width:2rem;
            position: absolute;
            left: 1.8rem;
            bottom: 0.44;
            height: 1.2rem;
            color: #fff;
            font-size: 0.32rem;
            line-height: 0.52rem;
            margin-top: 0.8rem;
        }
        .hy{
            width:100%;
            height:0.4rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: 0.01rem solid #ccc;
            color: #ccc;
            border-radius: 0.5rem;
        }
        }
        .left1{
            diaplay:block;
            width:15%;
            height:0.2rem;
            img{
                width:100%;
                height:0.2rem;
            }
        }
        .right1{
            
            width:80%;
            font-size:0.3rem;
        }
    }
    .message{
        display: inline-block;
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 0.5rem;
        height: 0.5rem;
        img{
            width:100%;
            height:100%;
        }
    }
    }
    .box{
        background:#ccc;
        heihgt:100%;
        width:100%;
    }
    .ticket{
        height:1.48rem;
        width:100%;
        background:#fff;
        ul{
            width:100%;
            height:100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                width:25%;
                height:100%;
                text-align:center;
                line-height:1.48rem;
                b{
                    display:block;
                    width:100%;
                    height:0.48rem;
                    font-size:0.32rem;
                }
                p{
                    display:block;
                    width:100%;
                    height:0.32rem;
                    font-size:0.22rem; 
                }
            }
        }

    }
    .order{
        background:#fff;
        width:100%;
        height:3.5rem;
        margin-top:0.2rem;
        .myorder{
            height:0.4rem;
            height: 0.6rem;
    line-height: 0.4rem;
    padding: 0 0.44rem;
    padding-top: 0.2rem;
            .left{
                font-size:0.32rem;
                font-weight:600;
                width:1.44rem;
                height:0.4rem;
                text-align:center;
                line-height:0.4rem;
                float:left;
                margin-bottom:0.3rem;
                
            }
            .right{
                width:1.44rem;
                height:0.4rem;
                text-align:center;
                float:right;
                font-size:0.22rem;
                
            }
            
        }
    }
    .tp{
        width:100%;
        height:1.28rem;
        
        display: flex;
            justify-content: space-around;
            align-items: center;
        li{
            width:25%;
            height:100%;
            text-align:center;
            div{
                width:0.8rem;
                height:0.8rem;
                margin-left: 28%;
            }
            p{
                width:100%;
                height:0.32rem;
                font-size:0.2rem;
                text-align:center;
                line-height:0.32rem;
            }
        }
    }
   


`