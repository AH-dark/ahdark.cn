import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "~/components/Layout";
import { Paper, Typography } from "@mui/material";
import wakatime from "~/middleware/wakatime";
import StatResponse, { StatData } from "~/model/wakatime/response/stat";
import dynamic from "next/dynamic";
import WeekdaysResponse, {
    WeekdaysData,
} from "~/model/wakatime/response/weekdays";

const WakatimeChart = dynamic(() => import("~/components/WakatimeChart"), {
    ssr: false,
});

export interface Props {
    statData: StatData | null;
    weekdaysData: WeekdaysData | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
    context
) => {
    let statData: StatData | null = null;
    try {
        const res = await wakatime.get<StatResponse>(
            "/users/current/stats/all_time"
        );
        statData = res.data.data;
    } catch (err) {
        console.error(err);
    }

    let weekdaysData: WeekdaysData | null = null;
    try {
        const res = await wakatime.get<WeekdaysResponse>(
            "/users/current/weekdays/last_7_days"
        );
        weekdaysData = res.data.data;
    } catch (err) {
        console.error(err);
    }

    return {
        props: {
            statData,
            weekdaysData,
        },
    };
};

const CodeTime: NextPage<Props> = ({ statData, weekdaysData }) => {
    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "60vh",
                }}
            >
                <Typography
                    variant={"h4"}
                    component={"h1"}
                    mt={2}
                    align={"center"}
                    noWrap
                >
                    {"Code Time"}
                </Typography>
                {(statData === null || weekdaysData === null) && (
                    <Typography
                        variant={"h6"}
                        component={"h2"}
                        mt={2}
                        align={"center"}
                        noWrap
                    >
                        {"Error"}
                    </Typography>
                )}
                {statData && weekdaysData && (
                    <WakatimeChart stat={statData} weekdays={weekdaysData} />
                )}
            </Paper>
        </Layout>
    );
};

export default CodeTime;
