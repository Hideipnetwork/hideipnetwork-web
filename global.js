/**
 * 这里是接口，一定要使用base64的格式，内部代码会自动转换
 * hideipnetwork-admin的部署，不能改变router结构，否则web项目报错 ！！！
 * 这里的接口是admin部署后的完整接口
*/

// const url = 'aHR0cDovLzEyNy4wLjAuMTozMDAxLw=='
const url = 'aHR0cHM6Ly9qZXNtb3JhLm5wa24ubmV0L2hpZGVpcC9wYXNzd2Q='
window.localStorage.setItem('api', url)
