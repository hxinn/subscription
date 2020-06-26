import {filepost,formpost,request} from '../axios' ;//导入axios实例文件中方法
let base_api = 'http://localhost:8020' //获取项目api请求地址http://s.bchvr.com

//上传文件
export const uploadfile=data=>{
    return filepost(`${base_api}/api/upload/oss`,data);
}
//通过url上传文件
export const urlUploadfile=data=>{
    return formpost(`${base_api}/api/upload/url/oss`,data);
}
// 登录
export function getLogin({ enews, username, password, equestion }) {
    let res = request(`${base_api}/subscribe/account/login`, 'POST', { enews, username, password, equestion })
    return res
}

// 用户信息
export function getUser(token) {
    let res = request(`${base_api}/subscribe/account/admin/getUser`, 'POST', { token })
    return res
}