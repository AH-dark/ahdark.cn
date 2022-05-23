import React from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Theme,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import config from "../../config";
import Avatar from "../../utils/avatar";
import { useRouter } from "next/router";

import HomeIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/WorkRounded";

const list = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Work",
        href: "/work",
        icon: WorkIcon,
    },
];

const Sidebar: React.FC = () => {
    const theme = useTheme<Theme>();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const router = useRouter();

    return (
        <>
            {isDesktop ? (
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
                            <Typography variant={"h4"} component={"div"}>
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
                            <List>
                                {list.map((item, index) => (
                                    <ListItemButton
                                        key={index}
                                        href={item.href}
                                        target={"_blank"}
                                        onClick={
                                            item.href.startsWith("/")
                                                ? (event) => {
                                                      event.preventDefault();
                                                      router.push(item.href);
                                                  }
                                                : undefined
                                        }
                                        selected={
                                            item.href.startsWith("/") &&
                                            router.pathname === item.href
                                        }
                                    >
                                        <ListItemIcon>
                                            <item.icon />
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                ))}
                            </List>
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
            ) : (
                <></>
            )}
        </>
    );
};

export default Sidebar;
