import React, { Component,Fragment } from 'react'
import TabBar from "@components/tabBar"
export default class index extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                {this.props.meta.flag?<TabBar/>:''}
            </Fragment>
        )
    }
}
