import {filepost} from './axios' ;//导入axios实例文件中方法
let base_api = 'http://127.0.0.1:8020' //获取项目api请求地址http://s.bchvr.com

//上传文件
export const uploadfile=data=>{
    return filepost(`${base_api}/api/upload/oss`,data);
}