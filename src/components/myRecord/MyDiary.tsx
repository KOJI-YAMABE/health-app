import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { COLORS } from 'components/constants/color'

const diaryData = Array(8).fill({
    date: '2021.05.21',
    time: '23:25',
    content:
        '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
})

export const MyDiary = () => {
    return (
        <Box
            sx={{
                width: '100%',
                margin: '0 auto',
                color: COLORS.dark500,
                mt: 7,
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
                MY DIARY
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}            >
                {diaryData.map((entry, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 'calc(25% - 16px)',
                            border: `2px solid ${COLORS.gray400}`,
                            p: 2,
                            pb: 3,
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 400, color: COLORS.dark600 }}
                        >
                            {entry.date}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 400, mb: 2, color: COLORS.dark600 }}
                        >
                            {entry.time}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                whiteSpace: 'pre-wrap',
                                color: COLORS.dark600,
                            }}
                        >
                            {entry.content}
                        </Typography>
                    </Box>
                ))}
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', m: '0 auto' }}>
                    <Button variant='contained' sx={{ width: 296, mt: 2.5, height: 56, background: COLORS.gradation }}>
                        自分の日記をもっと見る
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
