import React from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import config from "~/config";
import MenuList from "~/components/Layout/Sidebar/MenuList";
import Image from "next/image";
import avatar from "~/source/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    position: "relative",
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
                    <Box marginTop={2} marginBottom={1}>
                        <Image
                            src={avatar}
                            style={{
                                borderRadius: "50%",
                            }}
                            alt={"avatar"}
                            height={96}
                            width={96}
                            priority
                        />
                    </Box>
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
                    {typeof config.social !== "undefined" && (
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                        >
                            {config.social.map((item, index) => (
                                <Box key={index} mt={0.5}>
                                    <Tooltip
                                        title={item.name.toLowerCase()}
                                        arrow
                                    >
                                        <IconButton
                                            size={"medium"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.open(item.href);
                                            }}
                                            href={item.href}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                size={"xs"}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
                <Box width={"100%"} pb={2}>
                    <MenuList />
                </Box>
                <Box position={"absolute"} bottom={0.5} width={"100%"} mb={1}>
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
            </Paper>
        </Box>
    );
};

export default DesktopSidebar;
