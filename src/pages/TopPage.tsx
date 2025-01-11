
import { BaseLayout } from 'components/layouts/BaseLayout'
import { Box } from '@mui/material'
import { COLORS } from 'components/constants/color'
import { LineChart, MyMealList, ProgressChart } from 'components/top'

export const TopPage = () => {

    const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];

    const datasets = [
        {
            data: [94, 90, 77, 85, 80, 72, 80, 71, 68, 66, 63, 66],
            borderColor: COLORS.primary300,
        }, {
            data: [94, 88, 81, 80, 68, 67, 63, 62, 60, 52, 46, 42],
            borderColor: COLORS.secondary300,
        },
    ];

    const meals = [
        {
            img: "/images/m01.jpg",
            title: "05.21 Morning",
        },
        {
            img: "/images/l03.jpg",
            title: "05.21 Lunch",
        },
        {
            img: "/images/d01.jpg",
            title: "05.21 Dinner",
        },
        {
            img: "/images/l01.jpg",
            title: "05.21 Lunch",
        },
        {
            img: "/images/m01.jpg",
            title: "05.21 Lunch",
        },
        {
            img: "/images/l02.jpg",
            title: "05.21 Dinner",
        },
        {
            img: "/images/d02.jpg",
            title: "05.21 Dinner",
        },
        {
            img: "/images/s01.jpg",
            title: "05.21 Snack",
        },
    ];


    return (
        <BaseLayout>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: COLORS.dark600, height: '312px', width: '100%' }}>
                <ProgressChart progress={75} date={'05/21'} />
                <LineChart labels={labels} datasets={datasets} />
            </Box>
            <MyMealList meals={meals} />
        </BaseLayout>
    )
}
