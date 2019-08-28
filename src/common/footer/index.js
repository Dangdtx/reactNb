import React, { Component } from 'react'
import {FooterWrapper} from "./styled" 
export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                 <div className="footer">
                    <div className="footerTitle">
                        <a href="/active/privacy.html">隐私政策</a>
                          <i></i>
                          <a href="/active/cookies.html">关于Cookie</a>
                    </div> 
                    <div className="footerContent">
                        <a>2012-2019 努比亚技术有限公司 版权所有</a> 
                        <p>
                            <a href="http://beian.miit.gov.cn/">粤ICP备10006213号</a>
                            <i></i> 
                            <a href="https://szcert.ebs.org.cn/D52B1891-CB9A-4FD0-8BC6-1D5650B567CE">ICP经营许可证编号：粤B2-20120688</a>
                        </p> 
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502000309">粤公网安备 44030502000309号</a>
                    </div>
                </div>
                <div>没有更多啦~</div>
            </FooterWrapper>
        )
    }
}
