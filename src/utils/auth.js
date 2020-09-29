import Cookies from 'js-cookie'

//localStorage
export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

export function setLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}

export function removeLocalStorage(key, value) {
    return localStorage.removeItem(key, value)
}

export function clearLocalSotrage(){
    return localStorage.clear();
}

//sessionStorage
export function getSessionStorage(key) {
    return sessionStorage.getItem(key)
}

export function setSessionStorage(key, value) {
    return sessionStorage.setItem(key, value)
}

export function removeSessionStorage(key, value) {
    return sessionStorage.removeItem(key, value)
}
export function clearSessionStorage(){
    return sessionStorage.clear();
}




//Cookies
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

//Cookies
export function getCookies(key) {
    return Cookies.get(key)
}

export function setCookies(key, value) {
    return Cookies.set(key, value)
}

export function removeCookies(key) {
    return Cookies.remove(key)
}