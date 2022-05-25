import type { NextPage } from "next";
import {
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
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
        dispatch(setTitle("Home"));
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const { data } = useListPostsQuery(page);

    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "60vh",
                }}
            >
                <List
                    sx={{
                        height: "100%",
                    }}
                >
                    {typeof data !== "undefined" &&
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
                        ))}
                </List>
            </Paper>
        </Layout>
    );
};

export default Home;
