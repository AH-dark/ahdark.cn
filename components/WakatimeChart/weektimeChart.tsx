import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import { Name, WeekdaysData } from "~/model/wakatime/response/weekdays";
import Chart from "react-apexcharts";

export interface Props {
    weekdays: WeekdaysData;
}

const WeekdaysChart: React.FC<Props> = ({ weekdays }) => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const line = theme.palette.divider;

    const options = useMemo<ApexOptions>(() => {
        return {
            chart: {
                id: "code-time-chart",
                height: 340,
                type: "bar",
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            grid: {
                strokeDashArray: 0,
                borderColor: line,
            },
            xaxis: {
                type: "category",
                categories: weekdays.weekdays.map((weekday) => weekday.name),
                labels: {
                    style: {
                        colors: primary,
                    },
                },
                axisBorder: {
                    show: true,
                    color: line,
                },
                tickAmount: weekdays.weekdays.length,
            },
            yaxis: {
                labels: {
                    style: {
                        colors: primary,
                    },
                },
            },
            tooltip: {
                theme: theme.palette.mode === "dark" ? "dark" : "light",
            },
            theme: {
                mode: theme.palette.mode,
                palette: theme.palette.primary.main,
            },
        };
    }, [theme, primary, line]);

    const series = useMemo<ApexAxisChartSeries>(
        () => [
            {
                name: "Coding",
                type: "column",
                data: weekdays.weekdays.map(
                    (weekday) =>
                        Math.round(
                            weekday.categories.filter(
                                (v) => v.name === Name.JobCoding
                            )[0]?.average / 36
                        ) / 100 || 0
                ),
            },
        ],
        []
    );

    return (
        <Chart options={options} series={series} type={"bar"} height={340} />
    );
};

export default WeekdaysChart;
