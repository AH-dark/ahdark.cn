import { NextApiHandler, NextApiResponse } from "next";
import config from "~/config";
import axios from "axios";
import { WP_REST_API_Posts } from "wp-types";

const getBaseUrl = () => {
    const url = new URL("/wp-json/wp/v2", config.wordpress);
    return url.href;
};

const instance = axios.create({
    baseURL: getBaseUrl(),
});

export interface PostsQuery {
    page?: number;
    size?: number;
}

export interface PostsResponse {
    data: WP_REST_API_Posts;
    total: number;
}

const Posts: NextApiHandler = (req, res: NextApiResponse<PostsResponse>) => {
    const { page, size } = req.query;

    instance
        .get<WP_REST_API_Posts>("/posts", {
            params: {
                page: page,
                per_page: size,
            },
        })
        .then((response) => {
            res.status(200).json({
                data: response.data,
                total: parseInt(response.headers["x-wp-total"]),
            });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

export default Posts;
