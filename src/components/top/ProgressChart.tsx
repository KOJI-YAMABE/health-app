import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Box, Typography } from "@mui/material"
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js"
import { COLORS } from "components/constants/color"

ChartJS.register(ArcElement, Tooltip, Legend)

type ProgressChartProps = {
    progress: number
    date: string
}

export const ProgressChart = ({ progress, date }: ProgressChartProps) => {
    const data = {
        labels: ["Progress", "Remaining"],
        datasets: [
            {
                data: [progress, 100 - progress],
                backgroundColor: [COLORS.white, COLORS.skeleton],
                hoverBackgroundColor: [COLORS.white, COLORS.skeleton],
                borderWidth: 1,
                borderColor: [COLORS.primary500, COLORS.skeleton],
            },
        ],
    }

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        cutout: "97%",
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    }

    return (
        <Box
            sx={{
                position: "relative",
                width: 540,
                height: 312,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url('/images/d01.jpg')", // 背景画像
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px", // 必要に応じて角丸を追加
            }}
        >
            <Doughnut
                data={data}
                options={options}
                style={{ filter: "drop-shadow(0px 0px 6px rgba(255, 150, 60, 0.8))" }}
            />
            <Box
                sx={{
                    display: "flex",
                    position: "absolute",
                    alignItems: "center",
                    textAlign: "center",
                    color: COLORS.white,
                    filter: "drop-shadow(0px 0px 4px rgba(255, 150, 60, 0.8))",
                }}
            >
                <Typography variant="body2" sx={{ fontSize: "18px", fontWeight: "bold", mr: 0.5 }}>
                    {date}
                </Typography>
                <Typography variant="h4" fontWeight={400} sx={{ fontWeight: "bold" }}>
                    {progress}%
                </Typography>
            </Box>
        </Box>
    )
}
