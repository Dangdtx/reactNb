const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/h5ajax.php",{
        target:"http://product.m.dangdang.com",
        changeOrigin:true,
       
    }))
    app.use(proxy("/show",{
        target:"https://m.nubia.com",
        changeOrigin:true,
    })) 
}

// https://m.nubia.com/show/page/block?pageType=5