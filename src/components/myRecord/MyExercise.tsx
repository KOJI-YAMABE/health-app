
import { Box, Typography } from '@mui/material'
import { COLORS } from 'components/constants/color'

const exerciseData = Array(10).fill({
    activity: '家事全般（立位・軽い）',
    calories: '26kcal',
    duration: '10 min',
})

export const MyExercise = () => {
    return (
        <Box
            sx={{
                width: '96%',
                color: COLORS.white,
                p: 1,
                height: 200,
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: COLORS.primary300,
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: COLORS.gray400,
                },
            }}
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {exerciseData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '48%',
                            borderBottom: `1px solid ${COLORS.gray400}`,
                            pb: 1,
                            mb: 1,
                        }}
                    >
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Box>
                                <Typography sx={{ fontSize: 15, fontWeight: 700 }}>・</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Box>
                                    <Typography sx={{ fontSize: 15, fontWeight: 400, }}>
                                        {item.activity}
                                    </Typography>
                                    <Typography sx={{ fontSize: 15, fontWeight: 400, color: COLORS.primary300 }}>
                                        {item.calories}
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: 18, fontWeight: 400, color: COLORS.primary300 }}>
                                    {item.duration}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
