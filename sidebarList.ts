import SidebarItem from "./model/sidebarItem";
import HomeIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/WorkRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

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
    {
        name: "Posts",
        href: "/posts",
        icon: ArticleRoundedIcon,
    },
];

export default list;
