import { createApi } from "@reduxjs/toolkit/query/react";
import { PostsQuery, PostsResponse } from "~/pages/api/wp/posts";
import axiosBaseQuery from "~/middleware/api/query";

const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        listPosts: builder.query<PostsResponse, PostsQuery | void>({
            query: (
                arg = {
                    page: 1,
                    size: 8,
                }
            ) => ({
                url: "/wp/posts",
                method: "GET",
                params: arg!,
            }),
        }),
    }),
});

export const { useListPostsQuery } = api;
export default api;
