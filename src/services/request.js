import axios from 'axios';
import to from './await-to-js.js';
import { COOKIE } from '../config/index.js';
const headers = {
    cookie: COOKIE,
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "cookie": "_ga=GA1.2.1324504221.1617681518; MONITOR_WEB_ID=805c1485-b106-43b6-8df6-65ce011e800c; odin_tt=6748806189899a59a243670355961073b4e09be71914707f09a9ee236f5750b5a3f388f7689c4a53b1c15a5c07c63dbedf7599d600f14cedc7920c5748398e5b; _gid=GA1.2.810924048.1633445900; passport_csrf_token_default=4ded999bb76aa538dbf3a2e075e0a89d; passport_csrf_token=4ded999bb76aa538dbf3a2e075e0a89d; passport_auth_status=505aa7d6067526cb71a1194c615ba0d3%2C; passport_auth_status_ss=505aa7d6067526cb71a1194c615ba0d3%2C; sid_guard=be74fcf1dc4384dd582635d29a03df8e%7C1639377508%7C5184000%7CFri%2C+11-Feb-2022+06%3A38%3A28+GMT; uid_tt=eefdb5a4767f85ef4366b12e1ff967f4; uid_tt_ss=eefdb5a4767f85ef4366b12e1ff967f4; sid_tt=be74fcf1dc4384dd582635d29a03df8e; sessionid=be74fcf1dc4384dd582635d29a03df8e; sessionid_ss=be74fcf1dc4384dd582635d29a03df8e; sid_ucp_v1=1.0.0-KDZiNmQ3YmZiMTlkNGM3MjYzMWM5YjIyZjBlMTlkMDNlZjdkODE0ZTEKFwiO8cC-_fXBAhDk1NuNBhiwFDgCQPEHGgJsZiIgYmU3NGZjZjFkYzQzODRkZDU4MjYzNWQyOWEwM2RmOGU; ssid_ucp_v1=1.0.0-KDZiNmQ3YmZiMTlkNGM3MjYzMWM5YjIyZjBlMTlkMDNlZjdkODE0ZTEKFwiO8cC-_fXBAhDk1NuNBhiwFDgCQPEHGgJsZiIgYmU3NGZjZjFkYzQzODRkZDU4MjYzNWQyOWEwM2RmOGU; n_mh=sZwW1Qj-IdccoyZ6AQrf5iXt_EmgAbZxG42I-a8FBCg; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}",
    "Referer": "https://juejin.cn/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
};

export const request = async function({ url, method = 'get' }){
    console.log(url);
    const [err, res]= await to(axios({ url, method, headers }));
    // console.log(err, res, 'await-to-js');
    const result = [err, res];
    if(res && res.data && res.data.err_no !== 0){
        // console.log(data.err_msg);
    }
    return result;
}