import React from "react";
import { NextPage } from "next";
import Layout from "~/components/Layout";
import { Paper } from "@mui/material";

const CodeTime: NextPage = () => {
    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "60vh",
                }}
            ></Paper>
        </Layout>
    );
};

export default CodeTime;
