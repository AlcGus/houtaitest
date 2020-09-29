
import axios from 'axios'
import { Message } from 'element-ui';

import { setSessionStorage,getSessionStorage } from "@/utils/auth";

// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}


// 定义axios对象
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Authorization': "Bearer " + sessionStorage.getItem('accessToken')
        // 'token':'eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJ3ZWl3ZWlqaXhpZSIsInN1YiI6IntcInVzZXJJZFwiOjEsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIixcInJvbGVMaXN0XCI6W3tcInJvbGVJZFwiOjEsXCJyb2xlTmFtZVwiOlwi6LaF57qn566h55CG5ZGYXCJ9XSxcImRlcGFydG1lbnRMaXN0XCI6W119IiwidXNlcl9uYW1lIjoid2Vpd2Vpaml4aWUiLCJuaWNrX25hbWUiOiJqaXhpZWNoZSIsImlzcyI6Ind1aGFuZ29uZ3lvdXpoaWppYV8yMDE5IiwiZXhwIjoxNTc3NTg3MDQ2LCJpYXQiOjE1NzYxMTU4MTcsImp0aSI6IjA0ZWMxOGQ3NWNiMDE0N2M5YjEwZCJ9.xSINkqd8K9nqvN3Es00DVEVKQko-60-EfOsLvy8Xgbs',
        // 'Authorization': "Bearer " +"eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJ3ZWl3ZWlqaXhpZSIsInN1YiI6IntcInVzZXJJZFwiOjEsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIixcInJvbGVMaXN0XCI6W3tcInJvbGVJZFwiOjEsXCJyb2xlTmFtZVwiOlwi6LaF57qn566h55CG5ZGYXCJ9XSxcImRlcGFydG1lbnRMaXN0XCI6W119IiwidXNlcl9uYW1lIjoid2Vpd2Vpaml4aWUiLCJuaWNrX25hbWUiOiJqaXhpZWNoZSIsImlzcyI6Ind1aGFuZ29uZ3lvdXpoaWppYV8yMDE5IiwiZXhwIjoxNTc3NTg3MDQ2LCJpYXQiOjE1NzYxMTU4MTcsImp0aSI6IjA0ZWMxOGQ3NWNiMDE0N2M5YjEwZCJ9.xSINkqd8K9nqvN3Es00DVEVKQko-60-EfOsLvy8Xgbs"
    },
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
});

service.interceptors.request.use((config) => {
    // 这里可以加一些http头 如果有必要    
    //设置公共参数
    const url=config.url;
    if(url.startsWith('$mock/')){
        config.url=config.url.replace('$mock','');
        config.baseURL="/api";
    }
    let _params = config.data;
    const method = config.method.toUpperCase();
    if (_params) {
        _params = filterNull(_params)
    };
    if (method === 'POST' || method === 'PUT') {
        config.data = _params;
    }
    if (method === 'GET' || method === 'DELETE') {
        config.params = _params;
    }
    if(sessionStorage.getItem('accessToken')!==null){
        config.headers["token"]= sessionStorage.getItem('accessToken')
        // config.headers["token"]= 'eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJ3ZWl3ZWlqaXhpZSIsInN1YiI6IntcInVzZXJJZFwiOjEsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIixcInJvbGVMaXN0XCI6W3tcInJvbGVJZFwiOjEsXCJyb2xlTmFtZVwiOlwi6LaF57qn566h55CG5ZGYXCJ9XSxcImRlcGFydG1lbnRMaXN0XCI6W119IiwidXNlcl9uYW1lIjoid2Vpd2Vpaml4aWUiLCJuaWNrX25hbWUiOiJqaXhpZWNoZSIsImlzcyI6Ind1aGFuZ29uZ3lvdXpoaWppYV8yMDE5IiwiZXhwIjoxNTc3NjAxMzk3LCJpYXQiOjE1NzYxMzAxNjgsImp0aSI6IjY0NjM3YTA3NzU1NzAyZDNjZDU1ZiJ9.W8U8C8ux7EFq9dcgIqsWclfnrHsCXVvPusHcpW8UXcQ'
    }

    return config;
}, error => {
    console.log("请求异常：", error);
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
         * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
         */
       
        return response.data
        
    },
    error => {
        return Promise.reject(error);
    }
)

export default service;