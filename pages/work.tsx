import type { GetStaticProps, NextPage } from "next";
import { Box, Paper } from "@mui/material";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import * as fs from "fs";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { setTitle } from "../redux/reducers/viewUpdate";

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps = async (context) => {
    const post = fs.readFileSync("./source/pages/work.md").toString("utf8");

    return {
        props: {
            post,
        },
    };
};

const Work: NextPage<{ post: string }> = (props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle("Work"));
    }, [dispatch]);

    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "65vh",
                }}
            >
                <Box padding={3} component={"article"} width={"100%"}>
                    <Markdown>{props.post}</Markdown>
                </Box>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {"2020.6 ~ 2021.7"}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>RoundCloud</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {"2021.9 ~ Now"}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>Ungine Tech.</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>
        </Layout>
    );
};

export default Work;
