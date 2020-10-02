import axios from "axios";
import {config} from "../app/config";

export const createCopReact = async (data) => {
  try {
    const response = await axios.post(`${config.API_URL}/api/cops`, data);
    return response.data

  } catch (e) {
    console.log(e)
  }
}