import styled from "styled-components"

export const ServiceWrapper = styled.div` 
    width: 100%;
    display: inline-block;
    padding: 0.16rem;
    background: white;
    box-sizing: border-box;
    padding-bottom: 0;
    h2{
        font-size: .4rem;
        color: rgb(30,30,30);
        margin-left: 0.5em;
        font-weight: normal;
    }
    .serviceCard {
        width: 100%;
        height: 1.6rem;
        border-bottom: 1px solid rgb(230,230,230);
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            display: inline-block;
            width: 15%;
            height: 100%;
        }
        .serviceInfo {
            width: 85%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                .serviceTitle {
                    font-size: .32rem;
                    color: rgb(30,30,30);
                    margin-bottom: 0.3rem;
                }
                .serviceMessage {
                    font-size: 0.22rem;
                    color: rgb(150,150,150);
                }
            }
            .arrowIcon {
                height: 30px;
                width: 30px;
                background: #fff url(//shop-soa-static.nubia.com/images/arrowRight.png) no-repeat right center;
                background-size: 15px;
            }
        }
    }


`