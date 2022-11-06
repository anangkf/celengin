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
      const res = await axiosInstance.get(`/keinginan/user/${userId}`)
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
  },
  async addCelengan(data){
    // should descturctrure because there is property celengan in the data that is not needed yet
    // but required in the next request(celengin)
    const {keinginan_id, user_id, nominal} = data
    try{
      const res = await axiosInstance.post('/celengan',
        {
          keinginan_id,
          user_id,
          nominal
        }
      )
      return res
    }catch(err){
      return err
    }
  }, 
  // updated: also set selesai if celengan = nominal
  async celengin(data){
    const {keinginan_id: id, celengan, selesai} = data
    try{
      const res = await axiosInstance.patch(`/keinginan/${id}`, {celengan, selesai})
      return res
    }catch(err){
      return err
    }
  },
  async achieveKeinginan(){
    try{
      const res = await axiosInstance.put('/celengan/selesai')
      return res
    }catch(err){
      return err
    }
  },
  async getCelenganList(userId){
    try{
      const res = await axiosInstance.get(`/celengan/user/${userId}`)
      return res
    }catch(err){
      return err
    }
  },
  async keinginanDetail(data){
    try{
      const res = await axiosInstance.get(`/user/${data.userId}/keinginan/${data.id}`)
      return res
    }catch(err){
      return err
    }
  },
  // this function delete keinginan and its celengan lists at once
  async deleteKeinginanWithItsCelengan(keinginanId){
    try{
      const res = await axiosInstance.delete(`/celengan/keinginan/${keinginanId}`)
      return res
    }catch(err){
      return err
    }
  },
  // delete keinginan which has no celengan in list
  // it doesnt work for keinginan with celengan list inside
  async deleteKeinginan(keinginanId){
    try{
      const res = await axiosInstance.delete(`/keinginan/${keinginanId}`)
      return res
    }catch(err){
      return err
    }
  },
  async updateKeinginan(data){
    const id = data.id
    delete data.id
    try{
      const res = await axiosInstance.patch(`keinginan/edit/${id}`,data)
      return res
    }catch(err){
      return err
    }
  },
  async getTotalAchieved(){
    try{
      const res = await axiosInstance.get('keinginan/selesai')
      return res
    }catch(err){
      return err
    }
  }
}

export default APIKeinginan;