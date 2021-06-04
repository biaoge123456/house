// 配置请求的基准URL地址localhost:8089
//axios.defaults.baseURL = 'http://localhost:8089/housebackapi/';
axios.defaults.baseURL = 'http://192.168.5.147:8089/';
 //在前端页面中设置支持sesson共享
  axios.defaults.withCredentials = true;
  var webUrl="http://192.168.5.147:52330";
  //nginx的代理地址
  var nginxUrl='http://192.168.5.147:80/';

