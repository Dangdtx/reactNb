import styled from "styled-components"

export const DetailWrapper = styled.div`
     width:100%;
     height:100%;


`

export const Imgscroll =styled.div`
width:100%;
height:7.5rem;
img {
    width:100%;
    height:7.5rem;
    border-bottom:1px solid #ccc
}

`

export const BookDetailInf =styled.div`
width:7.5rem;
padding:0.12rem 0 0.24rem;
margin-bottom:0.1rem;


// /* 图书简介--图书名称 */
.bookDetailName {
    width:100%;
    height:0.38rem;
    font-size:0.28rem;
    columns: #4d525d;
    margin:0.1rem 0.1rem 0.08rem;


    span:nth-of-type(1) {
    display: inline-block;
    border-radius: 2rem;
    background:red;
    font-size:0.2rem;
    color:#fff;
    padding:0.02rem

}
}


// /* 图书简介--图书简介*/
.bookDetailIntroduce {
    width:100%;
    height:1.2rem;

    span {
    display: inline-block;
    height:100%;
    font-size:0.24rem;
    color:#969696;
    line-height:0.36rem;
    padding:0.1rem 0.2rem 0.08rem;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
}
    
}
// /* 图书简介--promo */
.promoWrapper {
    width:100%;
    height:0.32rem;
    .promo {
    font-size:0.24rem;
    color:#FF463C;
    margin:-0.08rem 0.2rem 0.2rem;
}
}



.bookDetailPrice{
    width:100%;
    height:1.14rem;
    padding:0 0.2rem;
    
    
    .bookDetailPriceInf{
    width:100%;
    height:0.68rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2rem 0 0;


    .bookDetailPriceInfLeft{
    display:flex;
    flex-direction: row;
    justify-content: center;

    .solePrice {
    font-size:0.4rem;
    color:#FF4637;


    span:nth-of-type(2){
    padding:0 0.1rem 0 0.06rem
}


}

// oldPrice
.oldPriceSole {
    height:0.34rem;
    display:inline-block;
    font-size:0.26rem;
    color:#969696;
    padding:0.08rem 0 0;

}

// 

.selePriceNotice {
    height:0.44rem;
    color:#222;
    padding:0.04rem 0.08rem;
    border-radius:2rem;
    border:1px solid #222;

}

}
//

.bookDetailPriceInfRight{
    font-size:0.26rem;
    color:#ff8161;
    padding:0.1rem 0 0 0.2rem;
}


}

.bookDetailOldPrice{
    height:0.46rem;
    padding:0.12rem 0 0;
    color:#969696;
}

}


.packageMail {
    width:100%;
    height:0.48rem;
    padding:0 0.2rem;
    span {
    display:inline-block;
    color:#f2303c;
    border:1px solid #f2303c;
    border-radius:2px;
    padding:0 1px;
}

`


export const BookeDetailScore = styled.div`
    height:1.25rem;
    width:100%;
    background:#F8F8F8;
    font-size:0.4rem;
    padding:0.24rem 0.2rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

.bookDetailScoreL{
    .bookDetailScoreLScore {
    color:#FF8161;
    
}

.bookDetailScoreLRecord {
    font-size:0.24rem;


    span:nth-of-type(1) {
    color:#B4B4B4;
    padding:1.rem 0 0;
}
    span:nth-of-type(2) {
    color:#FF8161;
}

}


.bookDetailScoreR {
    width:1.64rem;
    height:0.52rem;
    line-height:0.52rem;
    padding:0 0.2rem;
    font-size:0.24rem;
    color:#FF8161;
    border:1px solid #FF4637;
    border-radius: 2rem;
    background:#fff2ef;
    margin-top:0.12rem;
}

    
}

`


export const BookDetailSales=styled.div`
    width:100%;
    height:1.48rem;
    padding:0 0.2rem 0 0.2rem;
    font-size:0.28rem;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
.bookDetailSalesL {
    .sales {
    float:left;
    color:#EA002A;
    margin-right:0.2rem;
}

.bookDetailAddPriceShop {
    float:left;

    .addPriceShop{
     margin-bottom:0.2rem;



     span:nth-of-type(1) {
    font-size:0.24rem;
    color:#ea002a;
    padding:0.02rem 0.1rem;
    border:1px solid #ea002a;
    border-radius:0.1rem;
    margin-right:0.16rem;
} 

span:nth-of-type(2) {
    font-size:0.24rem;
    columns: #4d525d;;
    padding:0.02rem 0.1rem;
}



}




}
}


`


export const BookActhorPublishedRankingClassification =styled.div`
    width:100%;
    height:1.81rem;
    margin-bottom:0.05rem;


    .bookAction {

    }


`
export const BookDetailSaleAddress = styled.div`
    width:100%;
    height:1.48rem;
    padding:0 0.2rem 0 0.2rem;
    font-size:0.28rem;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #ccc;
.bookDetailSaleAddressL {
    .sendTo{
    float:left;
    color:#4d525d;
    margin-right:0.2rem;
 }
 .bookDetailSaleAddressLDetail{
     float:left;


     div {
     color:#4d525d;
     font-size:0.26rem;
     line-height:0.4rem;
 }

 div:nth-of-type(2) {
    color:#FF8161;
    font-size:0.26rem;
    line-height:0.4rem;
}

 }
}


`




export const AfterSales = styled.div`

     width:100%;
    height:1.16rem;
    padding:0.22rem 0 0.12rem;
    margin:0 0.2rem;
    font-size:0.24rem;
    color:#4D525D;
    li {
    float:left;
    margin:0 0.3rem 0.16rem 0rem;
   

}

`

export const BookSelected = styled.div`
    width:100%;
    height:0.44rem;
    color:#4D525D;
    font-size:0.14rem;
    padding:0.1rem;
    line-height:0.24rem;
    font-family: Helvetica;
    border-bottom:1px solid #ccc;


`


export const Footer = styled.div`
    width:100%;
    height:1.02rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;


    div:nth-of-type(1) {
    float:left;
    height:100%;
    width:1.35rem;
    font-size:0.24rem;
    color:#4D525D;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
}


div:nth-of-type(2){
    float:left;
    height:100%;
    width:1.35rem;
    font-size:0.24rem;
    color:#4D525D;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
}

div:nth-of-type(3){
    float:left;
    height:100%;
    width:2.4rem;
    line-height:1.02rem;
    text-align:Center;
    font-size:0.3rem;
    color:#fff;
    background:#FFBE23; 
}


div:nth-of-type(4){
    float:left;
    height:100%;
    width:2.4rem;
    line-height:1.02rem;
    text-align:Center;
    font-size:0.3rem;
    color:#fff;
    background:#F3554B;
}

`