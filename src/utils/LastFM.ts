import axios from "axios";
import type { AxiosResponse } from "axios";

const last = import.meta.env.VITE_LASTFM_API;

const FetchLastFM = async <T = unknown>(): Promise<T | null> => {
  console.log(last);
  try {
    const res: AxiosResponse<T> = await axios.get(last);

    if (res.status !== 200) {
      console.log("No data");
      return null;
    }

    return res.data;
  } catch (err) {
    console.error("Error fetching LastFM data:", err);
    return null;
  }
};

export default FetchLastFM;
