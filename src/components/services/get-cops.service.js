import axios from "axios";
import {config} from "../app/config";

export const getCopReact = async () => {
  try {
    const response = await axios.get(`${config.API_URL}/api/cops/all`);
    console.log(99, response.data);
    return response.data

  } catch (e) {
    console.log(e)
  }
}
