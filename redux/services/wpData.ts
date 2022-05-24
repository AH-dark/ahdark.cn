import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config";
import { WP_REST_API_Posts } from "wp-types";

const getBaseUrl = () => {
    const url = new URL("/wp-json/wp/v2", config.wordpress);
    return url.href;
};

const WpData = createApi({
    reducerPath: "wpData",
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
    }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        listPosts: builder.query<WP_REST_API_Posts, number | void>({
            query: (page = 1) => ({
                url: "/posts",
                params: {
                    page: page,
                    per_page: 8,
                },
            }),
            providesTags: ["Posts"],
        }),
    }),
});

export const { useListPostsQuery } = WpData;
export default WpData;
