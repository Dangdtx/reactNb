import styled from "styled-components"

export const GoodsWrapper = styled.div`
    .header{
        position: relative;
        top: 0;
        left: 0;
        border-bottom: 1px solid #ccc;
        background: #fff;
        width: 100%;
        z-index: 99;
        height:1.2rem;
        display:felx;
        justify-content:space-between;
        align-items:center;
    }
    .left{
        display:flex;
        width:30%;
        height:100%;
        text-align:center;
        line-height:1.2rem;
        align-items:center;
        margin-left:0.3rem;
        {
            img{
                width:100%;
                height:40%;
            }
        }

    }
    .right{
        width:20%;
        height:100%;
        display:flex;
        justify-content:space-between;
        margin-right:0.3rem;
        {
            ul{
                width:100%;
                height:100%;
                display:flex;
        justify-content:space-between;
                li{
                    width:50%;
                    height:100%;
                    font-size:0.3rem;
                    text-align:center;
                    line-height:1.2rem;
                }
            }
        }
    }
    .middle{
        position:fixed;
        top:1.2rem;
        left:0;
        padding-bottom:1rem;
        width:100%;
        height:100%;
        background:#ccc;
        .tu{
            margin-top:1.5rem;
            height:5.5rem;
            width:100%;
            text-align:center;
            
            img{
                margin-left:25%;
            }
            h3{
                width:100%;
                height:0.44rem;
                font-size:0.3rem;
                margin-top:2rem;
            }
            p{
                width:100%;
                height:0.32rem;
                font-size:0.2rem;
            }
        }
        .bottom{
            width:100%;
            height:1.6rem;
            position:relative;
            .zhong{
                height: 0.96rem;
                width: 4rem;
                position: absolute;
                top: 50%;
                left: 25%;
                text-align: center;
                font-size: 0.4rem;
                line-height: 0.96rem;
                color: #515459;
                text-shadow: rgba(0,0,0,0.1) 0 1px 0;
                border-radius: .1em;
                overflow: hidden;
                border-width: 1px;
                border-style: solid;
                box-shadow: rgba(0,0,0,0.1) 0 0.02941em 0.11765em 0 inset;
                border-top-color: #d3d4d5;
                border-left-color: #dadbdd;
                border-right-color: #dadbdd;
                border-bottom-color: #dadbdd;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background-image: linear-gradient(#f3f4f6,#dfe0e2);
            }
        }
    }
`