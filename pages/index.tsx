import type { GetStaticProps, NextPage } from "next";
import { Box, Paper } from "@mui/material";
import Layout from "../components/Layout";
import Markdown from "../components/Markdown";
import * as fs from "fs";

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps = async (context) => {
    const post = fs.readFileSync("./source/pages/home.md").toString("utf8");

    return {
        props: {
            post,
        },
    };
};

const Home: NextPage<{ post: string }> = (props) => {
    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "65vh",
                }}
            >
                <Box
                    padding={3}
                    component={"article"}
                    height={"100%"}
                    width={"100%"}
                >
                    <Markdown>{props.post}</Markdown>
                </Box>
            </Paper>
        </Layout>
    );
};

export default Home;
