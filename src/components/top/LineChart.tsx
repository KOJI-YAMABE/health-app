import React from "react"
import { Line } from "react-chartjs-2"
import { Box } from "@mui/material"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js"
import { COLORS } from "components/constants/color"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

type LineChartProps = {
    labels: string[]
    datasets: {
        data: number[]
        borderColor: string
    }[]
}

export const LineChart = ({ labels, datasets }: LineChartProps) => {
    const data = { labels, datasets }

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    display: true,
                    color: COLORS.white
                },
                grid: {
                    display: true,
                    color: COLORS.gray400
                },
            },
        }
    }

    return (
        <Box sx={{ width: "80%", maxWidth: 589, margin: "0 auto", padding: "16px" }}>
            <Line data={data} options={options} />
        </Box>
    )
}