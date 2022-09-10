import React, { useState } from "react";
import { StatData } from "~/model/wakatime/response/stat";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { WeekdaysData } from "~/model/wakatime/response/weekdays";
import WeekdaysChart from "~/components/WakatimeChart/weektimeChart";
import LanguagesChart from "~/components/WakatimeChart/languagesChart";
import EditorsChart from "~/components/WakatimeChart/editorsChart";

dayjs.extend(relativeTime);

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, width: "100%" }}>{children}</Box>
            )}
        </Box>
    );
}

export interface Props {
    stat: StatData;
    weekdays: WeekdaysData;
}

const WakatimeChart: React.FC<Props> = ({ stat, weekdays }) => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={(e, v) => setValue(v)}
                    variant={"fullWidth"}
                >
                    <Tab label="Weekdays" />
                    <Tab label="Languages" />
                    <Tab label="Editors" />
                </Tabs>
            </Box>
            <Box width={"100%"}>
                <TabPanel value={value} index={0}>
                    <WeekdaysChart weekdays={weekdays} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LanguagesChart stat={stat} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <EditorsChart stat={stat} />
                </TabPanel>
            </Box>
            <Typography variant={"body2"} padding={2} pt={0}>
                {"Data collected from Wakatime"}
            </Typography>
        </Box>
    );
};

export default WakatimeChart;
