import React from 'react'
import { Box, Button, ImageList, ImageListItem, Typography } from '@mui/material'
import { MealsProps } from 'types/top';
import { COLORS } from 'components/constants/color';

const eatTimes = [
    {
        label: "url('/icons/icon_morning.png')",
    }, {
        label: "url('/icons/icon_lunch.png')",
    }, {
        label: "url('/icons/icon_dinner.png')",
    }, {
        label: "url('/icons/icon_snack.png')"
    }
];


export const MyMealList = ({ meals }: MealsProps) => {
    return (
        <Box sx={{ mx: 20, mt: 3 }}>
            <Box sx={{ display: 'flex', width: '70%', justifyContent: 'space-between', m: '0 auto' }}>
                {eatTimes.map((eatTime, index) => (
                    <Box key={index} sx={{
                        width: 136,
                        height: 136,
                        backgroundImage: eatTime.label,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                    }} />
                ))}
            </Box>
            <Box sx={{ width: "100%", padding: 2 }}>
                <ImageList cols={4} gap={8}>
                    {meals.map((meal, index) => (
                        <ImageListItem key={index} sx={{ position: "relative", overflow: "hidden", }}>
                            <img
                                srcSet={meal.img}
                                src={meal.img}
                                alt={meal.title}
                                loading="lazy"
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "50%",
                                    backgroundColor: COLORS.primary300,
                                    color: COLORS.white,
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    textAlign: "center",
                                    padding: "4px 0",
                                }}
                            >
                                {meal.title}
                            </Typography>
                        </ImageListItem>
                    ))}
                </ImageList>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', m: '0 auto' }}>
                    <Button variant='contained' sx={{ width: 296, mt: 2.5, height: 56, background: COLORS.gradation }}>記事をもっと見る</Button>
                </Box>
            </Box>
        </Box>
    )
}
