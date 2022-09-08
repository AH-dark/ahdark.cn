import React, { useMemo } from "react";
import { StatData } from "~/model/wakatime/response/stat";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material";

export interface Props {
    stat: StatData;
}

const LanguagesChart: React.FC<Props> = ({ stat }) => {
    const theme = useTheme();
    const line = theme.palette.divider;

    const options = useMemo<ApexOptions>(
        () => ({
            chart: {
                id: "language-chart",
                width: 380,
                type: "pie",
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
            labels: stat.languages.map((language) => language.name),
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
            tooltip: {
                theme: theme.palette.mode,
            },
            theme: {
                mode: theme.palette.mode,
                palette: theme.palette.primary.main,
            },
        }),
        []
    );

    const series = useMemo<ApexNonAxisChartSeries>(
        () =>
            stat.languages.map(
                (language) => Math.round(language.total_seconds / 36) / 100
            ),
        []
    );

    return (
        <Chart options={options} series={series} type={"pie"} width={"100%"} />
    );
};

export default LanguagesChart;
