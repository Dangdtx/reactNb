import styled from "styled-components"

export const GoodsDetail = styled.div`
    width:100%;
    height:100%;
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
   
    

`

export const OverviewParameterNav=styled.div`
    width:100%;
    height:0.96rem;
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
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background:#fff;
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

    width:100%;
    height:12rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    overflow:auto;
    transition:2s;
    // position:relative;



`


export const SelectedProjectHeader=styled.div`
    width:100%;
    height:2.08rem;
    
    position:fixed;
    left:0;
    top:1.3rem;
    background:#fff;
    padding:0 0.384rem;
    color:#000;
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:0.096rem 0;
    img {
        width:2.02rem;
        height: 1.87rem;
    }
    .title {
        div:nth-of-type(1) {
            span:nth-of-type(1){
                font-size:0.352rem;
                color:#FF4D4D;
                margin-right:0.2rem;
        }
        pan:nth-of-type(2){
            font-size:0.256rem;
            color:#999999;
    }
        }
        div:nth-of-type(2) {
            font-size:0.272rem;
            color:#464646;
        }
    }


`
export const SelectedProjectBody =styled.div`
    
    padding:2.08rem 0.384rem 0;



`

export const SelectedProjectColor=styled.div`
    margin-top:0.5rem;
    .title {
        display:block;
         font-size:0.336rem;
        color:#323232;
        margin-bottom:0.192rem;
    }
    div {
        display:inline-block;
        font-size:0.24rem;
        color:rgb(112,112,112);
        padding:0.096rem 0.6rem;
        border:1px solid rgb(112,112,112);
        margin:0 0.16rem 0.16rem 0;
        border-radius:0.1rem;

    }
   

`
export const SelectedProjectSpecifications=styled.div`
margin-top:0.5rem;

.title {
    display:block;
     font-size:0.336rem;
    color:#323232;
    margin-bottom:0.192rem;
}

div {
    display:inline-block;
    font-size:0.24rem;
    color:rgb(112,112,112);
    padding:0.096rem 0.224rem;
    margin:0 0.16rem 0.16rem 0;
    border:1px solid rgb(112,112,112);
    border-radius:0.1rem;

}
`
export const SelectedProjectsuit=styled.div`
margin-top:0.5rem;

.title {
    display:block;
     font-size:0.336rem;
    color:#323232;
    margin-bottom:0.192rem;
}
div {
    width:100%;
    padding:0.096rem 0.24rem;
    border:1px solid rgb(112,112,112);
    border-radius:0.1rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    font-size:0.24rem;
    color:#717171;
    margin-bottom:0.2rem;

}
`
export const SelectedProjectService=styled.div`
margin-top:0.5rem;

.title {
    display:block;
     font-size:0.336rem;
    color:#323232;
    margin-bottom:0.192rem;
}

`
export const SelectedProjectinstallment=styled.div`
margin-top:0.5rem;

.title {
    display:block;
     font-size:0.336rem;
    color:#323232;
    margin-bottom:0.192rem;
}
`
export const SelectedProjectNum=styled.div`
margin-top:0.5rem;

.title {
    display:block;
     font-size:0.336rem;
    color:#323232;
    margin-bottom:0.192rem;
}
`
export const SelectedProjectButton=styled.div`
margin-top:0.5rem;

.title {
    display:block;
     font-size:0.336rem;
    color:#323232;
    margin-bottom:0.192rem;
}
`