import ListItem from "~/model/listItem";
import HomeIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/WorkRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";

const list: ListItem<
    OverridableComponent<SvgIconTypeMap> & { muiName: string }
>[] = [
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
