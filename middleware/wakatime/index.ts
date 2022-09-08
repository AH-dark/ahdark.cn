import axios from "axios";
import config from "~/config";
import Base64 from "~/utils/base64";

const instance = axios.create({
    baseURL: "https://wakatime.com/api/v1/",
    headers: {
        Authorization: "Basic " + Base64(config.wakatimeToken || ""),
        Accept: "application/json",
    },
});

export default instance;
