import {filepost,formpost} from './axios' ;//导入axios实例文件中方法
let base_api = 'http://192.168.2.190:8020' //获取项目api请求地址http://s.bchvr.com

//上传文件
export const uploadfile=data=>{
    return filepost(`${base_api}/api/upload/oss`,data);
}
//通过url上传文件
export const urlUploadfile=data=>{
    return formpost(`${base_api}/api/upload/url/oss`,data);
}