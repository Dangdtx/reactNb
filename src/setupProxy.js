const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/show",{
        target:"https://m.nubia.com",
        changeOrigin:true,
    })) 
}

// https://m.nubia.com/show/page/block?pageType=5