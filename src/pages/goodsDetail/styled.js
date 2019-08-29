import styled from "styled-components"

export const GoodsDetail = styled.div`
    width:100%;
    height:100%;
    // background:#999;
`
export const GoodsDetailImg = styled.div`
    width:100%;
    height:7.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    img {
        width:7.5rem;
        height:7.5rem;
    }
`

export const GoodsDetailInf = styled.div`
    width:100%;
    height:2.75rem;
    padding:0.2rem 0.32rem;
    margin:1px 0;
    
    h2 {
        font-size:0.36rem;
        color:#191919
    }
    div:nth-of-type(1) {
        color:#FF4D4D;
        font-size:0.3rem;
        margin:0.13rem 0 0.26rem;
    }
    div:nth-of-type(2) {
        span:nth-of-type(1) {
            color:#FF4D4D;
            font-size:0.36rem;
        }
        span:nth-of-type(2) {
            color:#999999;
            font-size:0.28rem;
        }
    }
`

export const GoodsDetailSales =styled.div`
    width:100%;
    height:3.92rem;
    padding:0.096rem 0.32rem;
    margin:0.096rem 0;


`

export const Sales =styled.div`

width:100%;
height:2.67rem;
padding:0.32rem 0;
display:flex;
flex-direction:row;
// justify-content:space-between;
font-size:0.288rem;
border-bottom:1px solid #999;

div {
    font-size:0.3rem;
    color:#868686;
    margin-right:0.24rem;
}
ul {
    width:80%;
    li {
       margin-bottom:0.128rem; 
       display:flex;
       flex-direction:row;
      
       span:nth-of-type(1) {
            // height:0.42rem;
           display:inline-block;
           border:2px solid #FF5E5E;
           color:#FF5E5E;
           border-radius:0.2rem;
           padding:0 0.16rem;
           margin-right:0.24rem;
       }
       span:nth-of-type(2) {
            display:inline-block;
            color:#353535;
    }
    }
    li
}
`

export const Choiced =styled.div`
    width:100%;
    padding:0.32rem 0;
    display:flex;
    flex-direction:row;
    border-bottom:1px solid #999;

    div {
        font-size:0.3rem;
        color:#868686;
        margin-right:0.24rem;
    }
    span {
        font-size:0.288rem;
        color:#000000;
    }


`
export const GoodsDetailOverviewParameter =styled.div`
    width:100%;
   
    background:pink;
   
    

`

export const OverviewParameterNav=styled.div`
    width:100%;
    height:0.96rem;
    background:yellow;
    font-size:0.32rem;
    div {
        float:left;
        width:50%;
        height:100%;
        text-align:center;
        line-height:0.96rem;
    }
`

export const Overview=styled.div`

`

export const Parameter=styled.div`



`

export const Footer =styled.div`
    width:100%;
    height:0.98rem;
    position:fixed;
    left:0;
    bottom:0;
    background:pink;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    li {
        width:16%;
        font-size:0.24rem;
        color:#9C9C9C;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

    }


    li:nth-of-type(4) {
        width:50%;
        height:100%;
        line-height:0.98rem;
        text-align:center;
        font-size:0.32rem;
        color:#fff;
        background:#787878;
    }




`

export const SelectedProject =styled.div`

    width:2rem;
    height:5rem;
    overflow:auto;
    background:green;

`