import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Pagination,
    Paper,
    Typography,
} from "@mui/material";
import Layout from "~/components/Layout";
import { useAppDispatch } from "~/store";
import { setTitle } from "~/store/reducers/viewUpdate";
import { WP_REST_API_Post } from "wp-types";
import * as HtmlToText from "html-to-text";
import ChromeReaderModeRoundedIcon from "@mui/icons-material/ChromeReaderModeRounded";
import { useListPostsQuery } from "~/store/services/api";

const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle("Posts"));
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(8);
    const { data, isError, isSuccess } = useListPostsQuery({
        page,
        size,
    });

    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "60vh",
                }}
            >
                <Typography
                    variant={"h4"}
                    component={"h1"}
                    mt={2}
                    align={"center"}
                    noWrap
                >
                    {"Posts"}
                </Typography>
                <List
                    sx={{
                        px: 1,
                        mb: 2,
                    }}
                >
                    {isError && (
                        <Typography
                            variant={"h6"}
                            component={"h2"}
                            mt={2}
                            align={"center"}
                            noWrap
                        >
                            {"Error"}
                        </Typography>
                    )}
                    {isSuccess &&
                        data!.data.map((item: WP_REST_API_Post, index) => (
                            <ListItem key={index} component={"article"}>
                                <ListItemText
                                    primary={item.title.rendered}
                                    secondary={
                                        !item.excerpt.protected
                                            ? HtmlToText.convert(
                                                  item.excerpt.rendered
                                              )
                                            : undefined
                                    }
                                    sx={{
                                        mr: 1,
                                    }}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        href={item.link}
                                        target={"_blank"}
                                        rel={"noopener self"}
                                    >
                                        <ChromeReaderModeRoundedIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                </List>
                <Box
                    width={"100%"}
                    mb={1}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <Pagination
                        count={
                            (data?.total || 0) % size > 0
                                ? Math.floor((data?.total || 0) / size) + 1
                                : (data?.total || 0) / size
                        }
                        page={page}
                        onChange={(e, page) => {
                            setPage(page);
                        }}
                    />
                </Box>
            </Paper>
        </Layout>
    );
};

export default Home;
