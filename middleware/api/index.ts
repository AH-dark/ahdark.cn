import axios from "axios";
import { dispatch } from "~/store";
import { setLoading } from "~/store/reducers/viewUpdate";

const instance = axios.create({
    baseURL: "/api",
    responseType: "json",
    responseEncoding: "utf8",
    timeout: 10000,
    withCredentials: true,
});

instance.interceptors.request.use((req) => {
    dispatch(setLoading(true));
    return req;
});

instance.interceptors.response.use((res) => {
    dispatch(setLoading(false));
    return res;
});

export default instance;
