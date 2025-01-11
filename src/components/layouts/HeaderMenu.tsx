import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { COLORS } from 'components/constants/color'
import { HeaderItemsProps } from 'types/layouts'

export const HeaderMenu = ({ item }: HeaderItemsProps) => {
    return (
        <IconButton sx={{ width: 160, p: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                {item.icon}
            </Box>
            <Box sx={{ mr: 2, my: 1.5 }}>
                <Typography fontSize={16} fontWeight={300} color={COLORS.white}>
                    {item.title}
                </Typography>
            </Box>
        </IconButton>
    )
}
