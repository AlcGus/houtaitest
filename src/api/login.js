import { setSessionStorage,getSessionStorage } from "@/utils/auth";
import { loginApi, refreshToken} from "./request";
//写具体登录业务语句
class AuthService {
    constructor() {}
    static login(user, passwd) {
        return loginApi({
            accountNumber: user,
            password: passwd,
            // username:user
        })
            .then(data => {
                return data;
            })
            .catch(err => {
                throw err;
            });
    }
    //获取用户信息是需要接口的 用登录模拟
    static getuserinfo() {
        // return request.get('userinfo', null)
        return loginApi({
            username: "test",
            password: "test123"
        })
            .then(data => {
                return data;
            })
            .catch(err => {
                throw err;
            });
    }
    getToken = () => {
        if (setSessionStorage.getItem("accessToken")) {
            return JSON.parse(setSessionStorage.getItem("accessToken"));
        }
        return "";
    };
    static refreshToken(){
        let token = getSessionStorage("accessToken");
        console.log(11)
        let formdata=new FormData();
        formdata.append("token",token);
        refreshToken(formdata).then((res)=>{
            setSessionStorage("accessToken",res.token);
        })
        // if (localStorage.getItem("token")) {
        //     token = this.getToken();
        // }


        // if (token.Token && token.Expires) {
        //     return callWrapper("/api/user/refresh", false, null, "post")
        //         .then(newToken => newToken.data)
        //         .then(data => {
        //             return data;
        //         })
        //         .catch(err => {
        //             throw "could not refresh token";
        //         });
        // }
    };
}

export default AuthService;
