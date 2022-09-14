import { createApi } from "@reduxjs/toolkit/query/react";
import config from "~/config";
import { WP_REST_API_Posts } from "wp-types";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

const getBaseUrl = () => {
    const url = new URL("/wp-json/wp/v2", config.wordpress);
    return url.href;
};

const instance = axios.create({
    baseURL: getBaseUrl(),
});

const axiosBaseQuery =
    (): BaseQueryFn<{
        url: string;
        method?: AxiosRequestConfig["method"];
        data?: AxiosRequestConfig["data"];
        params?: AxiosRequestConfig["params"];
    }> =>
    async ({ url, method, data, params }) => {
        try {
            const result = await instance.request({
                url,
                method,
                data,
                params,
            });
            return { data: result };
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

const WpData = createApi({
    reducerPath: "wpData",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        listPosts: builder.query<
            { count: number; data: WP_REST_API_Posts },
            { page: number; size: number } | void
        >({
            query: (data) => ({
                url: "/posts",
                params: {
                    page: data?.page || 1,
                    per_page: data?.size || 8,
                },
            }),
            transformResponse(response: AxiosResponse<WP_REST_API_Posts>) {
                return {
                    data: response.data,
                    count: parseInt(response.headers["x-wp-total"]),
                };
            },
            providesTags: ["Posts"],
        }),
    }),
});

export const { useListPostsQuery } = WpData;
export default WpData;
