import React from "react";
import { Box, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { setSidebarOpen } from "~/redux/reducers/viewUpdate";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

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
        <Box
            component={"div"}
            position={"fixed"}
            top={".8em"}
            left={open ? -128 : 0}
            padding={0}
            sx={{
                transition: "all 1s",
            }}
        >
            <Paper
                component={"button"}
                sx={{
                    border: "none",
                    padding: 0,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
                onClick={handleClick}
            >
                <ChevronRightRoundedIcon
                    sx={{
                        height: "1.5em",
                        width: "1.5em",
                        ml: 0.5,
                    }}
                />
            </Paper>
        </Box>
    );
};

export default MenuSwitcher;
