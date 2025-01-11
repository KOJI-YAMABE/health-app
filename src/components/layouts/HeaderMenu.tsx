import { Box, IconButton, Typography } from '@mui/material';
import { COLORS } from 'components/constants/color';
import { HeaderItemsProps } from 'types/layouts';
import { Link } from 'react-router-dom';

export const HeaderMenu = ({ item }: HeaderItemsProps) => {
    return (
        <IconButton
            component={Link}
            to={item.link} // リンク先
            sx={{
                width: 160,
                p: 0,
                textDecoration: 'none', // リンクの装飾を無効化
                color: COLORS.white, // テキストとアイコンの色を白に設定
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                {item.icon}
            </Box>
            <Box sx={{ mr: 2, my: 1.5 }}>
                <Typography fontSize={16} fontWeight={300} color={COLORS.white}>
                    {item.title}
                </Typography>
            </Box>
        </IconButton>
    );
};
