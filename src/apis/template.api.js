import {axiosInstance} from '../configs/axiosInstance'

const APITemplate = {
  async getTemplates(){
    try{
      const res = await axiosInstance.get('/templates')
      return res
    }catch(err){
      return err
    }
  }
}

export default APITemplate;