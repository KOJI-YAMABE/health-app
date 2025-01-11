
import { MdMenu } from "react-icons/md";
import { Box, IconButton } from '@mui/material'
import { COLORS } from 'components/constants/color';
import { HeaderItemsType } from 'types/layouts';
import { HeaderMenu } from 'components/layouts/HeaderMenu';

const HeaderItems: HeaderItemsType[] = [
    {
        title: '自分の記録',
        link: '/my_record',
        icon: <img src='/icons/icon_memo.png' alt='icon_memo' width={27} />
    }, {
        title: 'チャレンジ',
        link: '/#',
        icon: <img src='/icons/icon_challenge.png' alt='icon_challenge' width={27} />
    }, {
        title: 'お知らせ',
        link: '/#',
        icon: <img src='/icons/icon_info.png' alt='icon_info' width={27} />
    }
]

export const MenuApp = () => {
    return (
        <Box sx={{ display: 'flex', mr: 20, height: '100%', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {HeaderItems.map((item, index) => (
                    <HeaderMenu key={index} item={item} />
                ))}
            </Box>
            <Box>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MdMenu color={COLORS.primary400} size={32} />
                </IconButton>
            </Box>
        </Box>
    )
}
