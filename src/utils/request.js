// 定义获取请求参数

import fetch from './fetch'
import { Message ,MessageBox} from 'element-ui';
import {refreshToken} from '@/api/request'
import { setSessionStorage,getSessionStorage } from "@/utils/auth";
import axios from 'axios'
let subscribers = [];
function onAccessTokenFetched() {
    subscribers.forEach((callback)=>{
      
        callback();
    })
    subscribers = [];
}

function addSubscriber(callback) {
    subscribers.push(callback)
}
function othenrequest(url, options) {
    console.log("挂起的请求",url, options)
    const token = getSessionStorage('accessToken');
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'token':token,
        },
        // withCredentials: true,
        url: url,
        data:JSON.stringify(options.data),
        timeout: 10000 ,
        baseURL: process.env.VUE_APP_BASE_API,
    };
    const newOptions = { ...options, ...defaultOptions };
    console.log("最终的参数",newOptions)
    return new Promise((resolve,reject)=>{
        axios.request(newOptions)
        .then((response)=>{
            // checkStatus(response) 
            console.log(response.data)
            resolve(response.data)
        })
        .catch(error => reject(error));
    })
        
}

let isRefresh=true;
const promise = (data) => new Promise((resolve, reject) => {
    fetch(data).then(response => {
        if (response.code && response.code === 200) {
            resolve(response.data);
        } else if(response.code && response.code === 10006){
            MessageBox({
                type: 'warning',
                title:"提示",
                message:"登录超时，请重新登录！"
            }).then(()=>{
                sessionStorage.clear()
                let redictTo=window.location.href
                window.location.href=window.location.origin+"/#login"+'?returnUrl='+redictTo
            }).catch(()=>{
                sessionStorage.clear()
                window.location.href=window.location.origin+"/#login"
            })
           
        }
        else if(response&&response.code==20006){
            if(isRefresh){
                isRefresh=false;
                const token = getSessionStorage('accessToken');
                let formdata=new FormData();
                formdata.append("token",token);
                refreshToken(formdata).then((res)=>{
                    setSessionStorage("accessToken",res.token);
                    // 开始执行挂起的请求 执行所有的subscribers
                   
                    onAccessTokenFetched()
                    isRefresh = true;
                })
            }
            // 开始挂起请求
            // function addSubscriber(callback) {
            //     subscribers.push(callback)
            // }
           
            const retryOriginalRequest = new Promise((resolve) => {
                addSubscriber(()=> {
                    // resolve(othenrequest(data.url, data))
                    othenrequest(data.url, data).then(res=>{
                        resolve(res)
                    })
                })
            });
          retryOriginalRequest.then((res)=>{
            resolve(res.data)
          }) ;
        }
        else {
            console.log('error!!!!')
          //后台返回的错误提示需自行添加
            reject(response);
        }
       
    }).catch(error => {
        console.log(error)
         Message({
            showClose: true,
            // message: '服务接口异常：' + error,
            message: '网络异常，请稍后再试。',
            type: 'error'
        });
        reject(error);
    });
});
// 返回在vue模板中的调用接口
export default {
    get: (url, params, success, failure) => {
        return promise({
            method: 'GET', url, data: params
        })
    },
    post(url, params, success, failure) {
        return promise({
            method: 'POST', url, data: params
        })
    },
    put: function (url, params, success, failure) {
        return promise({
            method: 'PUT', url, data: params
        })
    },
    delete: (url, params, success, failure) => {
        return promise({
            method: 'DELETE', url, data: params
        })

    }
}
