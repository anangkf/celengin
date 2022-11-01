import {axiosInstance} from '../configs/axiosInstance/index'

const APIUser = {
  async register(data){
    try{
      const res = await axiosInstance.post('/register', data)
      return res
    }catch(err){
      console.log(err.response)
    }
  },

  async login(username){
    try{
      const res = await axiosInstance.get(`/login/${username}`)
      return res
    }catch(err){
      console.log(err.response)
    }
  }
}

export default APIUser;