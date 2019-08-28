import styled from "styled-components"

export const HeadersWrapper = styled.div`
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
        width: 40%;
         
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
`