
import { Box } from '@mui/material'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { RecordCard } from 'components/myRecord/RecordCard';
import { RecordCategoriesType } from 'types/myRecord';
import { BodyRecordChart } from 'components/myRecord/BodyRecordChart';
import { ChartBox } from 'components/myRecord/ChartBox';
import { MyExercise } from 'components/myRecord/MyExercise';
import { MyDiary } from 'components/myRecord/MyDiary';

const RecordCategories: RecordCategoriesType[] = [
    {
        title: 'BODY RECORD',
        description: '自分のカラダの記録',
        imgSrc: '/images/MyRecommend-1.jpg',
    },
    {
        title: 'MY EXERCISE',
        description: '自分の運動の記録',
        imgSrc: '/images/MyRecommend-2.jpg',
    },
    {
        title: 'MY DIARY',
        description: '自分の日記',
        imgSrc: '/images/MyRecommend-3.jpg',
    },
];

export const MyRecord = () => {
    return (
        <BaseLayout>
            <Box sx={{ width: '100%', }}>
                <Box sx={{ mx: 20, mt: 7 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {RecordCategories.map((category) => (
                                <RecordCard category={category} />
                            ))}
                        </Box>
                        <ChartBox title={`BODY\nRECORD`} date='2021.05.21' height={304}>
                            <BodyRecordChart />
                        </ChartBox>
                        <ChartBox title={`MY\nEXERCISE`} date='2021.05.21' height={264}>
                            <MyExercise />
                        </ChartBox>
                        <MyDiary />
                    </Box>
                </Box>
            </Box>
        </BaseLayout >
    )
}
