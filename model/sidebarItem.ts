import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";

export default interface SidebarItem {
    name: string;
    href: string;
    icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}
