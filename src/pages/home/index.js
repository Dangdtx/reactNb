import React, { Component } from 'react'
import Headers from "@common/headers"
import { Page } from "@common/commonStyled"
import HomePage from "@components/homePage"  
export default class Home extends Component {
    
    render() {
        return (
            <Page>   
                <Headers />
                <HomePage /> 
            </Page>
        )
    }
    
}
