import React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import Sidebar from "../Sidebar";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <>
            <CssBaseline />
            <React.Suspense>
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
                                my: 8,
                            }}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                        >
                            {props.children}
                        </Grid>
                    </Grid>
                </Container>
            </React.Suspense>
        </>
    );
};

export default Layout;
