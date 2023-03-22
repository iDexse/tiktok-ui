import { HeaderOnly } from "~/components/Layout";

//pages
import Home from "~/pages/Following";
import Following from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
// public routes dành cho cộng đồng đều vào đc
const pushlicRoutes =[
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
]

// private routes dành cho người đã đăng nhập trang web vào đc
const privateRoutes = {

}
export {pushlicRoutes, privateRoutes} 