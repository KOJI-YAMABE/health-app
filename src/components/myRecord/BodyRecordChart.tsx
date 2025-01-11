import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Box, Button } from '@mui/material';
import { COLORS } from 'components/constants/color';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const BodyRecordChart = () => {
    const [timeRange, setTimeRange] = useState("年");
    const yearLabels = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
    const monthLabels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];
    const weekLabels = ["1週", "2週", "3週", "4週", "5週"];
    const dayLabels = ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日"];
    const timeRangeList = ["日", "週", "月", "年"]

    const data = {
        labels: yearLabels,
        datasets: [
            {
                data: [94, 90, 77, 85, 80, 72, 80, 71, 68, 66, 63, 66],
                borderColor: COLORS.primary300,
            }, {
                data: [94, 88, 81, 80, 68, 67, 63, 62, 60, 52, 46, 42],
                borderColor: COLORS.secondary300,
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
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
        <>
            <Box sx={{ width: '96%', height: '240px', px: 2 }}>
                <Line data={data} options={options} />
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
                {timeRangeList.map((range) => (
                    <Button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        sx={{
                            backgroundColor: timeRange === range ? COLORS.primary300 : COLORS.white,
                            color: timeRange === range ? COLORS.white : COLORS.primary300,
                            fontSize: 15,
                            borderRadius: 5,
                            mx: 1,
                            p: 0
                        }}
                    >
                        {range}
                    </Button>
                ))}
            </Box>
        </>
    );
};
