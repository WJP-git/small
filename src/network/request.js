import axios from "axios";
axios.defaults.baseURL = '...'
axios.defaults.timeout = 5000
export default {
    get(path = '',data = {}){
       return new Promise((resolve,reject)=>{
            axios.get(path,{
                params:data
            }).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(path = '',data = {}){
        return new Promise((resolve,reject)=>{
            axios.post(path,data).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })

        })
    }
}