import axios from "axios";
import {config} from "../app/config";

export const createUserReact = async (data) => {
  try {
    const response = await axios.post(`${config.API_URL}/users`, data);
    return response.data

  } catch (e) {
    console.log(e)
  }
}