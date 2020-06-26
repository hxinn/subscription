import axios from "axios"
import qs from "qs"
import store from '@/store'
import { Message } from "element-ui"

// 创建axios实例
const service = axios.create({
    timeout: 30000, // 请求超时时间
})
// 添加request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)
// 添加respone拦截器
service.interceptors.response.use(
    response => {
        let res = {}
        res.status = response.status
        res.data = response.data
        return res
    },
    error => {
        if (error.response && error.response.status == 404) {
            Message.error("页面不存在")
        }
        return Promise.reject(error.response)
    }
)

export function get(url, params = {}) {
    // params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
        url: url,
        method: "get",
        headers: {},
        params,
    })
}

//封装post请求
export function post(url, data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: data,
    }
    sendObject.data = JSON.stringify(data)
    return service(sendObject)
}

//封装post请求
export function filepost(url, data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: "post",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: data,
    }
    //sendObject.data=JSON.stringify(data);
    return service(sendObject)
}

//封装post请求
export function formpost(url, data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(data),
    }
    //sendObject.data=JSON.stringify(data);
    return service(sendObject)
}

export const request = async(url = '', type = 'GET', data = {}) => {
    let result
    type = type.toUpperCase()
    // 让每个请求都携带userid
    if (store.state.user) {
        data.userid = store.state.user.userid
    }
    if (type === 'GET') {
        await service.get(url, { params: data })
        .then(res => {
            result = res.data
        })
    } else if (type === 'POST') {
        await service.post(url, qs.stringify(data))
        .then(res => {
            result = res.data
        })
    }
    return result
}

export { service }
