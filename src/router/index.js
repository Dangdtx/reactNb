import { Home,
    Sort,
    Worth,
    Car,
    Mine, 
    Login, 
    Search,
    BookDetail,
GoodsDetail,
ShoppingList,
    Youke 

} from  "@pages"

    export const tabBarRoute = [
        {
            path:"/home",
            component:Home,
            meta:{
                flag:true,
            },
            name:"首页",
            icon:"\ue620 "
        },
        {
            path:"/sort",
            component:Sort,
            meta:{
                flag:true,
            },
            name:"分类",
            icon:"\ue634"
        },
        {
            path:"/worth",
            component:Worth,
            meta:{
                flag:true,
            },
            name:"发现",
            icon:"\ue617"
        },
        {
            path:"/car",
            component:Car,
            meta:{
                flag:true,
            },
            name:"购物车",
            icon:"\ue621"
        },
        {
            path:"/mine",
            component:Mine,
            meta:{
                flag:true,
                auth:true
            },
            name:"我的",
            icon:"\ue67a"
        }
    ]    
    export const noTabBarRoute = [
        {
            path:"/login",
            component:Login,
            meta:{
                flag:false
            },
            name:"登录",
        },
        { 
            path:"/search",
            component:Search,
            meta:{
                flag:false
            },
            name:"搜索",
        },
        {

            path:"/bookDetail",
            component:BookDetail,
            meta:{
                flag:false
            },
            name:"详情",
        },
        
        {
            path:"/goodsDetail/:productId/:id",
            component:GoodsDetail,
            meta:{
                flag:false
            },
            name:"详情",
        },
        {
            path:"/shopping",
            component:ShoppingList,
            meta:{
                flag:false
            },
            name:"购物车"
        },

        {
            path:"/youke",
            component:Youke,
            meta:{
                flag:false,
                auth:false
            },
            name:"youke"
             
        }
         
    ]
    export const routeConfig = tabBarRoute.concat(noTabBarRoute)