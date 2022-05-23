import React from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import DesktopSidebar from "./DesktopSidebar";
import MenuSwitcher from "./MenuSwitcher";
import MobileSidebar from "./MobileSidebar";

const Sidebar: React.FC = () => {
    const theme = useTheme<Theme>();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            {isDesktop ? (
                <DesktopSidebar />
            ) : (
                <>
                    <MenuSwitcher />
                    <MobileSidebar />
                </>
            )}
        </>
    );
};

export default Sidebar;
