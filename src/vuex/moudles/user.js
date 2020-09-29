import { setSessionStorage ,clearSessionStorage,getSessionStorage} from "@/utils/auth";
import AuthService from "@/api/login";
import { setResourceListInSessionstorage} from '@/utils/util'
import routes from "@/router";
const user = {
    state: {
        userInfo: {
            userId: "",
            roleId:"",
            userName: "",
            platFlag:"",
            payPwd:"",
            phone:""
        },
        resourceList: [],
        isExistUserinfo: false,
    },
    mutations: {
        SET_RESOURCELIST: (state, resourceList) => {
            state.resourceList = JSON.parse(resourceList)
            setResourceListInSessionstorage(state.resourceList);
        },
        SET_USERINFO: (state, userInfo) => {
            // state.userInfo.userId = userInfo.userId;
            // state.userInfo.trees = userInfo.trees;
            let userInfoObj={
                userName:userInfo.userName,
                platFlag:userInfo.platFlag,
                userId:userInfo.userId,
                roleId:userInfo.roleId,
                payPwd:userInfo.payPwd,
                phone:userInfo.phone
            }
            state.userInfo.userName =userInfoObj.userName;
            state.userInfo.platFlag =userInfoObj.platFlag;
            state.userInfo.userId =userInfoObj.userId;
            state.userInfo.roleId =userInfoObj.roleId;
            state.userInfo.payPwd =userInfoObj.payPwd;
            state.userInfo.phone =userInfoObj.phone;
            setSessionStorage("userinfo", JSON.stringify(userInfoObj));
            //   setSessionStorage("menus", JSON.stringify(userInfo.trees));
        },
        SET_ISEXISTUSERINFO: (state, isExistUserinfo) => {
            state.isExistUserinfo = isExistUserinfo;
            //   setSessionStorage("isExistUserinfo", isExistUserinfo);
        },

        SET_TOKEN: (state, accessToken) => {
            state.accessToken = accessToken;
            setSessionStorage("accessToken", accessToken);
        },
        GET_USERINFO:(state)=>{
            let userInfo={};
            if(state.userInfo.userName!=""){
                userInfo=state.userInfo
            }else{
                userInfo=JSON.parse(getSessionStorage("userinfo"));   
            }
            state.userInfo=userInfo
            // return userName
        },
        CHANGE_TOKEN:(state,status)=>{
            state.loginTimeOut=status
        }
    },
    actions: {
        // 用户名登录
        async LoginByUsername({ commit }, userInfo) {
            const username = userInfo.username.trim();
            const passwd = userInfo.passwd.trim();
            const data = await AuthService.login(username, passwd);
            if (data) {
                commit("SET_TOKEN", data.token);
                console.log({...data})
                commit("SET_USERINFO", data);
                if (data.resourcesList) {
                    commit("SET_RESOURCELIST", data.resourcesList)
                }

                commit("SET_ISEXISTUSERINFO", true);

            } else {
                console.log("getuserinfo do not have data!!");
            }
            return data;
        },
        // 获取用户信息也是需要接口的
        async GetUserInfo({ commit, state }) {
            //   const data = await AuthService.getuserinfo();
            //   // console.log('GetUserInfo')
            //   // console.log(data)
            //   if (data) {
            //     commit("SET_USERINFO", data);
            //     commit("SET_ISEXISTUSERINFO", true);
            //   } else {
            //     console.log("getuserinfo do not have data!!");
            //   }
            //   return data;
            commit("GET_USERINFO",state);
        },
        // 登出前端浏览器清除token和用户信息，后台发送请求(需要发送请求就发，不需要就直接置空)
        LogOut({ commit, state,rootState }) {
            return new Promise((resolve, reject) => {
               //防止登录的用户没有菜单，所以清空vuex的路由和菜单数据
                rootState.app.routerList=[];
                rootState.app.tagNavList=[];
                clearSessionStorage()
                commit("SET_TOKEN", "");
                // commit("SET_RESOURCELIST", []);
                commit("SET_USERINFO", {});
                commit("SET_ISEXISTUSERINFO", false);
                resolve();
                // logout(state.token).then(() => {
                //     commit('SET_TOKEN', '')
                //     commit('SET_ROLES', [])
                //     removeToken()
                //     resolve()
                // }).catch(error => {
                //     reject(error)
                // })
            });
            
        }
    }
};
export default user;