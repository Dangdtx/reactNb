import http from "@utils/http";

//week_choice
export const home_api = (pageType=5)=>http.get("show/page/block" ,{pageType}) 

// https://m.nubia.com/show/search/hot_search
// https://m.nubia.com/show/page/block?pageType=5