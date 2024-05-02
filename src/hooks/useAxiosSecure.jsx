import axios from "axios"


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
    
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        const token  = localStorage.getItem('access-token')
        console.log('request stopped by interceptores', token)
        config.headers.authorization = `Bearer ${token}`;
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
    })
    
// interceptors 401 and  403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log("Status error intercepted", status)
        return Promise.reject(error);
    } )

    return axiosSecure;
};

export default useAxiosSecure;