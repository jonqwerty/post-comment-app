import { Navigate } from "react-router";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/', component: <Posts /> , exact: true},
    {path: '/about', component: <About /> , exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage />, exact: true},
    {path: '/login', component: <Posts />, exact: true},
    {path: '*', component: <Error />, exact: true},
]

export const publicRoutes = [
    {path: '/', component: <Login /> , exact: true},
    {path: '/login', component: <Login /> , exact: true},
    {path: '*', component: <Navigate to = "login" /> , exact: true},
    
]