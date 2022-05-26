import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "~/source/images/background.webp";

const Background: React.FC = () => (
    <Box
        component={"span"}
        sx={{
            backgroundImage: `url(${backgroundImage.src})`,
            opacity: 1,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "block",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
        }}
    />
);

export default Background;
