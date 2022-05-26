import React from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftRounded";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import MenuList from "~/components/Layout/Sidebar/MenuList";
import { setSidebarOpen } from "~/redux/reducers/viewUpdate";
import config from "~/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import avatar from "~/source/images/avatar.png";

const MobileSidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector<boolean>(
        (state) => state.viewUpdate.sidebar.open
    );

    const toggleDrawer = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(setSidebarOpen(!open));
    };

    return (
        <Drawer open={open} onClose={toggleDrawer}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: [1],
                    width: 240,
                }}
            >
                <Typography variant={"subtitle1"} component={"div"} px={1}>
                    {config.siteName}
                </Typography>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Box py={1}>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    flexWrap={"nowrap"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={1}
                >
                    <Image
                        src={avatar}
                        style={{
                            borderRadius: "50%",
                        }}
                        alt={"avatar"}
                        height={64}
                        width={64}
                        priority
                    />
                    <Box pl={2}>
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
                </Box>
                {typeof config.social !== "undefined" && (
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        {config.social.map((item, index) => (
                            <Box key={index} mt={0.5}>
                                <Tooltip title={item.name.toLowerCase()} arrow>
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
            <Divider />
            <MenuList />
        </Drawer>
    );
};

export default MobileSidebar;
