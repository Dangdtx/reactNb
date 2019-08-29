import http from "@utils/http"
// https://m.nubia.com/show/page/searchPhone?pageNum=3&pageSize=10&cateId=17&type=0
// https://m.nubia.com/show/page/searchPhone?pageNum=2&pageSize=10&cateId=17&type=0
export const Cate = (pageNum=1,pageSize=10,cateId=17,type=0)=>http.get("/show/page/searchPhone",{pageNum,pageSize,cateId,type})
// export const Cate = ()=>http.get("/show/page/searchPhone?pageNum=3&pageSize=10&cateId=17&type=0")

