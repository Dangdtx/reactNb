import styled from "styled-components"

export const HeadersWrapper = styled.div`
    .header{
        width:100%;
        height:1rem;
        background:rgba(255,255,255,.2); 
        position: fixed;
        left:0;
        top:0;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:.1rem .15rem;
        z-index:10;
        .header_left{
            vertical-align: middle;
            height: .32rem;
            width: 20%;
            
            a{ 
                display: block;
                width: 100%;
                height: 100%;
                text-align: center;  
            }
            img{
                width:100%;
                height:100%;
                border-radius:30%;
            }
        } 
        .header_center{
            position:relative;
            width:78%;
            height:.7rem; 
            background:  #b5bec5;
            border-radius:.4rem;
            display:flex:
            justify-content:center;
            align-items:center;
            margin-left:.2rem;
            padding:0rem;
            margin-right:.3rem;
            span{
                font-size:.24rem;
                position: absolute;
                top: .2rem; 
                left:.3rem;
            }
            .iconfont{
                font-size:.3rem;
            }
            input{
                width:70%;
                position: absolute;
                top: .24rem; 
                left: 1rem;
                background:  #b5bec5; 
                outline: none;
                border:none;
                font-size: .24rem; 
                
            }
            
        }
        .header_right{
            vertical-align: middle; 
            width: 12%;
            height: .2rem;
            a{
                display:block;
                width:100%;
                height:100%;
                div{
                    width:100%;
                    height:100%;
                }
                .iconfont{
                    font-size:.3rem;
                }
            }
        }
    }
    .hot{
        width:100%;
        height:4rem;
        margin-top:1rem;
        padding:.5rem .4rem 0 .4rem;
        p{
            color: rgb(156,156,156);
            width:100%;
            height:.4rem;
            font-size:.32rem;
            margin-bottom:.32rem;
        }
        ul{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: center;
            li{
                margin:0 .16rem .1rem 0 ;
                padding : .16rem;
                background:#f4f4f4;
                a{
                    color:#1e1e1e;
                    font-size:.3rem;
                }
            }
        }
    }
    
`