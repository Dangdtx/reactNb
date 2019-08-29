import styled  from "styled-components"

export const Sort = styled.div`
    width:100%;
    height:100%

`

export const SortHeader = styled.div`
    width:100%;
    height:1.12rem;
    padding:0.2rem 0.3rem;
    border-bottom:1px solid #ccc;
    position:fixed;
    left:0;
    top:0;
    background:#fff;
    z-index:10;
    
    div:nth-of-type(1) {
        float:left;
        width: 78%;
        height:0.7rem;
        line-height:0.7rem;
        border-radius: 0.4rem;
        font-size:.28rem
        padding-left:0.8rem;

        i {
            position:absolute;
            left:9%;
            font-size:0.28rem;
            
        }
        span {
            font-size:.26rem
        }
    }

    div:nth-of-type(2) {
        float:right;
        width: 12%;
        height:0.7rem;
        line-height:0.7rem;

        i {
            font-size:0.28rem;
            padding:0.2rem;
            
        }
        
    }


`

export const SortBody = styled.div`

    width:100%;
    height:100%;
    // padding:1.12rem 0 0;
    // overflow:auto;


`

export const SortBodyNav = styled.div`
    position: fixed;
    width: 30%;
    height: 100%;
    left: 0;
    top:1.12rem;
    font-size: 0.32rem;
    padding-top:5%;
    padding-left: 0.4rem;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    overflow:auto;

    ul {
        width:100%;
        height:100%;
        padding-top:10%;
        li {
        height: .92rem;
        padding-top: 0.1rem;
    }
    }

   
`

    
export const SortBodyDetail = styled.div`
    position:fixed;
    width:70%;
    height:100%;
    right:0px;
    top:1.12rem;
    font-size: 0.32rem;
    padding-top:5%;
    overflow:hidden;
    overflow:auto;

`

export const SortBodyDetailList = styled.div`
    width:100%;
    div{
        width:100%;
        height:1rem;
        line-height:1rem;
        text-align:center;
        padding:0 0.34rem;
        
    }
   ul{
        width:100%;
        display:flex;
        padding:0 0.1rem;
        
        flex-wrap:wrap;
        margin-bottom:0.5rem;
        li {
            width:50%;
            height:2.62rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-top:0.2rem;
            img {
                width:2.1rem;
                height:2.1rem;
            }
            span {
                display:inline-block;
                width:100%;
                margin-top:0.2rem;
                font-size:0.24rem;
                color:#666666;
                text-align:center;
                

            }
        }

    }
`



    
    
    