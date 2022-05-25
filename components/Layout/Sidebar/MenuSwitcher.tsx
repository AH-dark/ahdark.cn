import React from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuRounded";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { setSidebarOpen } from "~/redux/reducers/viewUpdate";

const MenuSwitcher: React.FC = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector<boolean>(
        (state) => state.viewUpdate.sidebar.open
    );

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(setSidebarOpen(!open));
    };

    return (
        <Box position={"fixed"} top={0} right={0} padding={0} margin={1}>
            <IconButton size={"medium"} onClick={handleClick}>
                <MenuIcon />
            </IconButton>
        </Box>
    );
};

export default MenuSwitcher;
