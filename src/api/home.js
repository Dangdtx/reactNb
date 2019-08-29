import http from "@utils/http";

//week_choice
export const home_api = (pageType=5)=>http.get("show/page/block" ,{pageType}) 
//hotSearch 
export const hotSearch_api =( )=>http.get( "show/search/hot_search") 
// https://m.nubia.com/show/search/hot_search
// https://m.nubia.com/show/page/block?pageType=5
// 关键字搜索
export const searchKey_api = (key)=>http.get("show/search/normal_search?product_name="+ key +"&page_size=10&page_num=1" ) 
//https://m.nubia.com/show/search/normal_search?product_name=a&page_size=10&page_num=1