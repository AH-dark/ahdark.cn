import React from "react";
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import sidebarList from "~/sidebarList";
import { useSnackbar } from "notistack";
import SidebarItem from "~/model/sidebarItem";
import { useAppDispatch } from "~/redux/hooks";
import { setSidebarOpen } from "~/redux/reducers/viewUpdate";

const MenuList: React.FC = () => {
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useAppDispatch();

    const handleRedirect = (item: SidebarItem) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (item.href.startsWith("/")) {
            dispatch(setSidebarOpen(false));
            router.push(item.href).catch((err) => {
                console.error(err);
                enqueueSnackbar("Error when redirect.", {
                    variant: "error",
                });
            });
        } else {
            window.open(item.href);
        }
    };

    return (
        <List>
            {sidebarList.map((item, index) => (
                <ListItemButton
                    key={index}
                    href={item.href}
                    target={"_blank"}
                    onClick={handleRedirect(item)}
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
    );
};

export default MenuList;
