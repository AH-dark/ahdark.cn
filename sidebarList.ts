import HomeIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/WorkRounded";
import SidebarItem from "./model/sidebarItem";

const list: SidebarItem[] = [
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

export default list;
