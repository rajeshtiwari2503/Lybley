import axios from "axios"

 
// const baseUrl= "http://localhost:5000"
//hosted on railway
const baseUrl="https://lybleybackend-production.up.railway.app"
 

const get=(url)=>{
    return axios.get(baseUrl+url)
}

const post=(url,obj)=>{
    return axios.post(baseUrl+url ,obj)
 }

 const patch=(url,obj)=>{
    return axios.patch(baseUrl+url ,obj)
 }

 const put=(url,obj)=>{
    return axios.put(baseUrl+url ,obj)
 }
 const deleteData=(url)=>{
    return axios.delete(baseUrl+url)
}
export default {
   get ,post,patch,put,deleteData,
}