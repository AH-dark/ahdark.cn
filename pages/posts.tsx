import type { NextPage } from "next";
import {
    Box,
    CircularProgress,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import Layout from "~/components/Layout";
import { useAppDispatch } from "~/redux/hooks";
import { useEffect, useState } from "react";
import { setTitle } from "~/redux/reducers/viewUpdate";
import { useListPostsQuery } from "~/redux/services/wpData";
import { WP_REST_API_Post } from "wp-types";
import * as HtmlToText from "html-to-text";
import ChromeReaderModeRoundedIcon from "@mui/icons-material/ChromeReaderModeRounded";

const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle("Posts"));
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, isError } = useListPostsQuery(page);

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
                    {!isError ? (
                        typeof data !== "undefined" &&
                        !isLoading &&
                        !isFetching ? (
                            data.map((item: WP_REST_API_Post, index) => (
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
                            ))
                        ) : (
                            <Box
                                width={"100%"}
                                height={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <CircularProgress />
                            </Box>
                        )
                    ) : (
                        <Box
                            width={"100%"}
                            height={"100%"}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Typography variant={"body1"} width={"90%"}>
                                {"Error."}
                            </Typography>
                        </Box>
                    )}
                </List>
            </Paper>
        </Layout>
    );
};

export default Home;
