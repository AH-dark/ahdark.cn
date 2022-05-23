import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Avatar from "../../utils/avatar";
import config from "../../config";
import MenuList from "./MenuList";

const DesktopSidebar: React.FC = () => {
    return (
        <Box
            height={"100vh"}
            width={"100%"}
            maxWidth={213}
            position={"fixed"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
        >
            <Paper
                sx={{
                    pt: 2,
                    pb: 2,
                    minHeight: "50%",
                }}
            >
                <Box
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    px={1}
                    pb={1}
                >
                    <Box
                        component={"img"}
                        src={Avatar(config.owner.email, 96)}
                        borderRadius={"50%"}
                        marginTop={1}
                        marginBottom={2}
                        height={96}
                    />
                    <Typography variant={"h5"} component={"div"}>
                        {config.owner.name}
                    </Typography>
                    <Typography
                        variant={"body2"}
                        component={"div"}
                        color={"text.secondary"}
                    >
                        {config.owner.description}
                    </Typography>
                </Box>
                <Box width={"100%"} height={"100%"}>
                    <MenuList />
                </Box>
            </Paper>
            <Typography
                variant={"body2"}
                component={"div"}
                color={"text.secondary"}
                align={"center"}
                noWrap
                mt={1}
            >
                {"Copyright © 2022 AHdark"}
            </Typography>
        </Box>
    );
};

export default DesktopSidebar;
