
import axios from 'axios'
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const request = ({
    url,
      method = 'GET',
      headers,
      params,
      data,
      withCredentials = false
})=>{
    return new Promise((resolve,reject)=>{
        switch (method) {
            case 'POST':
            axios({
              url,
              method,
              data, 
              headers,
              withCredentials
            }).then( res => resolve( res ))
              .catch( err =>reject( err ))
            break;
        
          default:
            /* get put  delete */
            axios({
              url,
              method,
              headers,
              params,
              withCredentials
            }).then( res => resolve( res ))
              .catch( err => reject( err ))
            break;
        
        }
        // 添加请求拦截器
        
    })
}

export default request