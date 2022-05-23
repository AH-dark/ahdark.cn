import React from "react";
import { Typography } from "@mui/material";

const MarkdownListItem: React.FC<any> = (props) => (
    <Typography component="li" sx={{ mt: 1 }} variant={"body2"} {...props} />
);

export default MarkdownListItem;
