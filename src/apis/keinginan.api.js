import { axiosInstance } from "../configs/axiosInstance"

const APIKeinginan ={
  async getKeinginanTerbaru(userId){
    try{
      const res = await axiosInstance.get(`/keinginan/terbaru/user/${userId}`)
      return res
    }catch(err){
      return err
    }
  },
  async getKeinginanList(userId){
    try{
      const res = await axiosInstance.get(`keinginan/user/${userId}`)
      return res
    }catch(err){
      return err
    }
  },
  async createKeinginan(data){
    try{
      const res = await axiosInstance.post(`/keinginan`,data)
      return res
    }catch(err){
      return err
    }
  }
}

export default APIKeinginan;