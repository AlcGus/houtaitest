import Vue from 'vue'
import Router from 'vue-router'
import routes, {constantRouters,asyncRouters,customRouters}from './routers'
import store from "@/vuex/index";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import { getSessionStorage } from "@/utils/auth";
import Main from '@/Layout/index'
// import parentView from '@/components/parent-view'
// import {
//     getRouterListFromSessionstorage
//   } from '@/utils/util'


Vue.use(Router) 
// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const createRouter = (constantRouters,asyncRouters) =>{
   
   return new Router({
        // mode: 'history', // require service support
        // scrollBehavior: () => ({ y: 0 }),
        routes:[
            {
                path: '/',
                name: '_home',
                redirect: '/home',
                component: Main,
                meta: {
                  hideInMenu: true,
                  notCache: true
                },
                children: [
                  ...customRouters,
                ],
              },
              ...asyncRouters,
              ...constantRouters,
              {   path:'*',
                name:'errorPage404',
                meta: {
                    hideInMenu: true,
                    notCache: true
                  },
                component:{
                    template:"<h1>404</h1>"
                },
            }
        ]
    })
}
// 用来清空addRouters加入过的路由
// router.matcher = new newRouter({
//     mode: 'history',
//     routes: []}).matcher
//     // 动态添加可访问路由表
//     await router.addRoutes(store.getters.addRouters)
  
    
// const router = createRouter(constantRouters,asyncRouters)

export function resetRouter(constantRouters,asyncRouters) {
    const newRouter = createRouter(constantRouters,asyncRouters)
    routes.matcher = newRouter.matcher // reset router
    console.log("重置后的路由",routes,newRouter)
}




const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
    if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
    else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}
let flag =0;
routes.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    next()
    // const token = getSessionStorage("accessToken")
    // console.log(token,"token")
    // if (!token && to.name !== LOGIN_PAGE_NAME) {
    //     // 未登录且要跳转的页面不是登录页
    //     next({
    //         name: LOGIN_PAGE_NAME // 跳转到登录页
    //     })
    // } else if (!token && to.name === LOGIN_PAGE_NAME) {
    //     flag=0;
    //     console.log("aaaa")
    //     // 未登陆且要跳转的页面是登录页
    //     next() // 跳转
    // } else if (token && to.name === LOGIN_PAGE_NAME) {
    //     // 已登录且要跳转的页面是登录页
    //     next({
    //         name: 'home' // 跳转到homeName页
    //     })
    // } else {
    //     console.log("flag",flag)
        
    //     //从登陆页登陆后需生成路由
    //     // if(to.path !== '/login'){
    //     //             if(flag == 0){
    //     //                 console.log(flag)
                        
    //     //                  store.dispatch('generateRoutes');
    //     //                 // router.addRoutes(permission_routes);
    //     //                 flag++
    //     //                 next({ ...to, replace: true })
    //     //             }else{
    //     //                 next()
    //     //             }
    //     //         }else{
    //     //             next();
    //     //         }
    //     if(flag === 0 ){
           
    //         store.dispatch('generateRoutes')
    //         // router.addRoutes(store.)
    //         flag++
    //         console.log("生成路由")
    //         // console.log()
    //         // routes.addRoutes(store.state.app.routerList)
    //         next({ ...to, replace: true })
    //     }else{
    //     //    let platFlag=JSON.parse(JSON.parse(getSessionStorage("userinfo")).platFlag)
    //         next()
    //     //     let isLandWorkPlacelist=to.name=='landWorkPlacelist'||(to.name=='home'&&platFlag.flag==3);
    //     //     store.dispatch("headSearch/changeSearchStatus",isLandWorkPlacelist)
    //     }
    //     let platFlag=JSON.parse(JSON.parse(getSessionStorage("userinfo")).platFlag)
    //     // if(store.user.userInfo.roleId){
    //     //     return  store.user.userInfo.roleId.map(item=>item.roleId)
    //     // }
    //     // store.this.roleIds.some(r=> [105,1].indexOf(r) >= 0)
    //     // next()
    //     let roleNotAllowShow=false;
    //     if(store.getters.roleIds){
    //         roleNotAllowShow= store.getters.roleIds.some(r=> [105,1].indexOf(r) >= 0)
    //     }
    // //    console.log(store.getters.roleIds.some(r=> [105,1].indexOf(r) >= 0),"dd")
    //     let isLandWorkPlacelist=(to.name=='landWorkPlacelist'||(to.name=='home'&&platFlag.flag==3))&&!roleNotAllowShow;
    //     store.dispatch("headSearch/changeSearchStatus",isLandWorkPlacelist)
       
    // }
})

routes.afterEach(to => {
    NProgress.done(); // 结束Progress
    //window.scrollTo(0, 0)
})

export default routes