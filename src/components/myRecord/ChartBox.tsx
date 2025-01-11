import { Box, Typography } from '@mui/material'
import { COLORS } from 'components/constants/color'

type ChartBoxProps = {
    children: any
    titile: string
    date: string
    height: number
}

export const ChartBox = (props: ChartBoxProps) => {
    const { titile, date, height, children } = props
    return (
        <Box
            sx={{
                width: '96%',
                margin: '0 auto',
                height: height,
                bgcolor: COLORS.dark500,
                color: COLORS.white,
                whiteSpace: 'pre-wrap',
                p: 2,
                mt: 7
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography sx={{ fontSize: 15, fontWeight: 400, mr: 2, lineHeight: 1 }}>
                    {titile}
                </Typography>
                <Typography variant='h6'>{date}</Typography>
            </Box>
            {children}
        </Box>
    )
}
