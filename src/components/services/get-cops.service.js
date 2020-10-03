import axios from "axios";
import {config} from "../app/config";

export const getCopReact = async () => {
  try {
    const res = await axios.get(`${config.API_URL}/api/cops/all`);
    return res.data

  } catch (e) {
    console.log(e)
  }
}
