import axios from "./index";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";

const axiosBaseQuery =
    (): BaseQueryFn<{
        url: string;
        method?: AxiosRequestConfig["method"];
        data?: AxiosRequestConfig["data"];
        params?: AxiosRequestConfig["params"];
    }> =>
    async ({ url, method, data, params }) => {
        try {
            const result = await axios({
                url,
                method,
                data,
                params,
            });
            return { data: result.data };
        } catch (axiosError) {
            let err = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };

export default axiosBaseQuery;
