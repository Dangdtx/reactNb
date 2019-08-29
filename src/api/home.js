import http from "@utils/http";

//week_choice
export const home_api = (pageType=5)=>http.get("show/page/block" ,{pageType}) 
//hotSearch 
export const hotSearch_api =( )=>http.get( "show/search/hot_search") 
// https://m.nubia.com/show/search/hot_search
// https://m.nubia.com/show/page/block?pageType=5
// 关键字搜索
//https://m.nubia.com/show/search/normal_search?product_name=a&page_size=10&page_num=1



// wj

//       http://product.m.dangdang.com/h5ajax.php?action=get_product_info&pid=23990140&city_id=1&province_id=111&district_id=1110101&town_id=1110101
//http://product.m.dangdang.com/h5ajax.php?action=book-product&is_ab=1&pid=23990140&img_size=h&categoryId=50392&request_id=&sid=e252cb6d26aaac49f402f8eedfe7c27f
export const book_name_api = ()=>http.get("/h5ajax.php?action=get_product_info&pid=23990140&city_id=1&province_id=111&district_id=1110101&town_id=1110101")

// https://m.nubia.com/show/page/fetch/cateInfos



export const sort_api = () => http.get("/show/page/fetch/cateInfos")

// https://m.nubia.com/show/product/get?productId=840&specId=1177&source=8
export const goodsDetail_api = (productId=840,specId=1177,source=8) => http.get("/show/product/get",{productId,specId,source})






//  https://m.nubia.com/show/cart/hotProduct/query

export const list_api =(ids=1106)=>http.post("/show/cart/hotProduct/query",{ids})


