import request from '@/utils/request'


export function loginApi(query) {
    return request.post('/jxcBgUser/login', query);
}

export function refreshToken(query) {
    return request.post("/jxcBgUser/refreshToken",query);
}






