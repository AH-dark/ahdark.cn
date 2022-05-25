import React from "react";
import {
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftRounded";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import MenuList from "~/components/Layout/Sidebar/MenuList";
import { setSidebarOpen } from "~/redux/reducers/viewUpdate";
import config from "~/config";

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
            <MenuList />
        </Drawer>
    );
};

export default MobileSidebar;
