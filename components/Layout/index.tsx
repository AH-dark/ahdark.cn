import React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import Sidebar from "~/components/Layout/Sidebar";
import Background from "~/components/Layout/Background";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <>
            <CssBaseline />
            <Container
                maxWidth={"md"}
                sx={{
                    minHeight: "100vh",
                }}
            >
                <Grid container minHeight={"100vh"}>
                    <Grid item component={"nav"} xs={0} md={3}>
                        <Sidebar />
                    </Grid>
                    <Grid
                        item
                        component={"main"}
                        xs={12}
                        md={9}
                        sx={{
                            pl: 2,
                            pr: 1,
                            py: 6,
                        }}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        minHeight={"100vh"}
                    >
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
            <Background />
        </>
    );
};

export default Layout;
