import { axiosInstance } from "../configs/axiosInstance"

const APIKeinginan ={
  async getKeinginanTerbaru(userId){
    try{
      const res = await axiosInstance.get(`/keinginan/terbaru/user/${userId}`)
      return res
    }catch(err){
      return err
    }
  }
}

export default APIKeinginan;