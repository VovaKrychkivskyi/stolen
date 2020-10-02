import axios from "axios";
import {config} from "../app/config";

export const getCopReact = async () => {
  try {
    console.log(20);
    const res = await axios.get(`${config.API_URL}/api/cops/all`);
    console.log(777, res.data);
    return res.data

  } catch (e) {
    console.log(e)
  }
}
