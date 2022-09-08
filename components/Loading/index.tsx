import React from "react";
import { Box, LinearProgress, useTheme } from "@mui/material";

const Loading: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            id={"loading"}
            top={0}
            left={0}
            right={0}
            width={"100%"}
            overflow={"hidden"}
            position={"absolute"}
            zIndex={theme.zIndex.modal - 1}
        >
            <LinearProgress />
        </Box>
    );
};

export default Loading;
