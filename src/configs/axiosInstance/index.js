import axios from "axios";
import { CONST } from "../../utils/constants";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers:{
    'x-hasura-admin-secret': CONST.ADMIN_SECRET
  }
}
console.log(CONST)
export const axiosInstance = axios.create(config)