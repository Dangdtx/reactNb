import styled from "styled-components"


export const ShoppingWrapper = styled.div`
    width:100%;
    height:100%;
`
export const ListHeader = styled.div`
    width:100%;
    height:1.22rem;
    border:1px solid #ccc;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0 0.3rem;
    span {
        display:inline-block;
        font-size:0.4rem
        color:#464646;
    }
    i {
        font-size:0.4rem;
    }



`

export const ShoppingWrapperList = styled.div`
    width:!00%;
    display:flex;
    flex-direction:row;
    
    img {
        width:2rem;
        height:2rem;
    }
    .shoppingListInf {
        width:100%;
        height:100%;
        .shoppingListInfTitle {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            padding:0.16rem 0.5rem 0.16rem 0;
            span{

                width:4.8rem;
                font-size:0.32rem;
                color:#2c2c2c;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
               
               
            }
            


        }
        .soldPrice {
            width:100%;
            font-size:0.27rem;
                color:#87888c;
            span:nth-of-type(1) {
                margin-right:0.2rem;
            }
        }
        .numPriceTotal {
            width:100%;
            padding:0.168rem;
            margin:0.168rem 0 0;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            

            .shoppingListInfNum{
                display:flex;
                flex-direction:row;
                text-align:center;
                line-height:0.64rem;
                
                div {

                    width:0.64rem;
                    height:0.64rem;
                    border:1px solid #000;
                }
                span {
                    width:1rem;
                    height:0.64rem;
                    border:1px solid #000;

                }
               
            }
            .shoppingListInfPriceTotal {
                height:0.64rem;
                line-height:0.64rem;
                font-size:0.26rem;
                color:#000;
            }
            
        }
    }

`


export const PriceTotal = styled.div`
    width:100%;
    height:0.94rem;
    font-size:0.3rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 0.5rem 0 3rem;
    border-top:1px solid #999;
    border-bottom:1px solid #999;

    div {
       color: #2c2c2c;
    }
    span {
        color:#e60012
    }


`
export const Recommoned = styled.div`
    width:100%;
    height:1rem;
    line-height:1rem;
    padding-left:0.5rem;
    font-size:0.32rem;
    color:#000;
    border-bottom:1px solid #999;


`

export const RecommonedList = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    
    
    li{
        width:50%;
        height:4.72rem;
        border-right:1px solid #999;
        border-bottom:1px solid #999;
    
        img {
            width:2.84rem;
            height:2.84rem;
            margin:0.35rem;
        }
        .RecommonedListTitle {
            width:100%;
            height:0.44rem;
            padding:0.12rem 0.2rem;
            font-size:0.24rem;
            color:0.24rem;
            color:#000;
            margin:0.24rem 0;
        }
        .RecommonedListPrice {
            display:flex;
            flex-direction:row;
            
            justify-content:space-between;
            margin:0.12rem;
             span {
            font-size:0.32rem;
            color:#FF0000;
        }
        i {
            font-size:0.32rem;
        }
       
        }
       

    }
    

`
