import React from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from 'components/constants/color'
import { RecordCategoriesType } from 'types/myRecord'

export const RecordCard = ({ category }: { category: RecordCategoriesType }) => {
    const { imgSrc, title, description } = category

    return (
        <Box
            sx={{
                width: 288,
                height: 288,
                bgcolor: COLORS.primary300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    width: 240,
                    height: 240,
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)',
                    position: 'absolute',
                    top: 24,
                    left: 24,
                }}
            />
            <Box
                sx={{
                    width: 240,
                    height: 240,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    position: 'absolute',
                    top: 24,
                    left: 24,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: '11px', color: COLORS.primary300 }}>
                    {title}
                </Typography>
                <Box sx={{ backgroundColor: COLORS.primary400, width: 160 }}>
                    <Typography variant="body2" sx={{ color: 'white', }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}
