import axios from 'axios';
import qs from 'qs'
// import {Message} from 'element-ui'
axios.defaults.baseURL = 'http://134.175.100.63:5588/'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use((config)=>{
	if(config.method == 'post'){
		// config.data = qs.stringify(config.data,{arrayFormat:'repeat'});
	}
	return config;
})
// 响应拦截器
axios.interceptors.response.use((response)=>{
	if(response.data.status===200){
		
		return response.data;
	}
	else{
		
		return response.data;
	}
	
})

export default axios;