import Main from "@/Layout/index";
// import parentView from "@/components/parent-view";
import Router from "vue-router";
/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  title: 左侧菜单名
 *  hideInTag: (false) 设为true后此级路由将不会出现在面包屑中
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  activeMenu：匹配激活左侧菜单栏
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  icon: (-) 该页面在左侧菜单显示的图标，如果是自定义图标，需要在icon文件夹添加同名的图标
 * }
 */
export const asyncRouters = [{
    path: "/home",
    name: "home",
    component: Main,
    meta: {
        title: "首页",
        icon: "home"
    },
    redirect: "home/home",
    children: [{
        path: "home",
        name: "home",
        component: () => import("@/view/home/index"),
        meta: {
            icon: "home",
            title: "首页",
            hideInMenu: true,
            activeMenu: "/home"
        }
    }]
}];
export const customRouters = [
    {
        path: "/userManage/userInfo",
        name: "userInfo",
        component: () => import("@/view/userManage/userInfo/index"),
        meta: {
            icon: "",
            title: "用户管理",
            activeMenu: "/userManage/userInfo",
            activeTag: "userInfolist",
            hideInMenu: true,
            hideInTag: true
        }
    }, {
        path: "/userManage/userDepartment",
        name: "userDepartment",
        component: () => import("@/view/userManage/userDepartment/index"),
        meta: {
            icon: "",
            title: "用户管理",
            activeMenu: "/userManage/userDepartment",
            activeTag: "userDepartmentlist",
            hideInMenu: true,
            hideInTag: true
        }
    },   
];
export const constantRouters = [{
        path: "/login",
        name: "login",
        meta: {
            title: "Login - 登录",
            hideInMenu: true
        },
        component: () => import("@/view/login/index.vue")
    }
];
export default new Router({
    routes: [{
            path: "/",
            name: "_home",
            redirect: "/home",
            component: Main,
            meta: {
                hideInMenu: true,
                notCache: true
            },
            children: [
                  ...customRouters,
            ]
        },
        ...asyncRouters,
        ...constantRouters
    ]
});