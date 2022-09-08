import React, { useMemo } from "react";
import { StatData } from "~/model/wakatime/response/stat";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material";

export interface Props {
    stat: StatData;
}

const EditorsChart: React.FC<Props> = ({ stat }) => {
    const theme = useTheme();
    const line = theme.palette.divider;

    const options = useMemo<ApexOptions>(
        () => ({
            chart: {
                id: "editor-chart",
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
            labels: stat.editors.map((editor) => editor.name),
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
                theme: theme.palette.mode === "dark" ? "dark" : "light",
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
            stat.editors.map((editor) =>
                Math.round(editor.total_seconds / 3600)
            ),
        []
    );

    return (
        <Chart
            options={options}
            series={series}
            type={"pie"}
            height={340}
            width={"100%"}
        />
    );
};

export default EditorsChart;
