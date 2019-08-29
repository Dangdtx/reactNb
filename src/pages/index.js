import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Sort = Loadable({
    loader:()=>import("./sort"),
    loading:Loading
})
const Worth = Loadable({
    loader:()=>import("./worth"),
    loading:Loading
})
const Car = Loadable({
    loader:()=>import("./car"),
    loading:Loading
})
const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
 
}) 
const Search = Loadable({
    loader:()=>import("./search/index.js"),
    loading:Loading
}) 
  
const Youke = Loadable({
    loader:()=>import("./youke"),
    loading:Loading
}) 
export {
    Home,
    Sort,
    Worth,
    Car,
    Mine, 
    Login, 
    Search ,
    Youke  
}