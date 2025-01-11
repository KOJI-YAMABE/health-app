import React from 'react';
import { Box, Button, ImageList, ImageListItem, Typography } from '@mui/material';
import { COLORS } from 'components/constants/color';

const articles = Array.from({ length: 8 }, (_, index) => ({
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット…',
    tags: ['#魚料理', '#和食', '#DHA'],
    img: `/images/column-${(index % 8) + 1}.jpg`,
}));


export const ArticleGrid = () => {
    return (
        <Box sx={{ width: "100%", mt: 7 }}>
            <ImageList cols={4} gap={8}>
                {articles.map((article, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <ImageListItem sx={{ position: "relative", overflow: "hidden", }}>
                            <img
                                srcSet={article.img}
                                src={article.img}
                                alt={article.title}
                                loading="lazy"
                                style={{ width: "100%", height: "auto", objectFit: "cover", minHeight: 150 }}
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "60%",
                                    backgroundColor: COLORS.primary300,
                                    color: COLORS.white,
                                    fontSize: 15,
                                    fontWeight: 400,
                                    textAlign: "center",
                                    p: 0.5,
                                }}
                            >
                                {article.date} {article.time}
                            </Typography>
                        </ImageListItem>
                        <Typography
                            sx={{
                                fontSize: 15,
                                fontWeight: 300,
                                whiteSpace: 'pre-wrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                my: 1,
                            }}
                        >
                            {article.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: COLORS.primary400
                            }}
                        >
                            {article.tags.join(' ')}
                        </Typography>
                    </Box>
                ))}
            </ImageList>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', m: '0 auto' }}>
                <Button variant='contained' sx={{ width: 296, mt: 2.5, height: 56, background: COLORS.gradation }}>記事をもっと見る</Button>
            </Box>
        </Box>
    );
};
