import React from 'react'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material'
import { COLORS } from 'components/constants/color'

const FooterContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '160px',
    height: '128px',
    backgroundColor: COLORS.dark500,
}))

const FooterMenu = [
    { title: '会員登録', link: '/#' },
    { title: '運営会社', link: '/#' },
    { title: '利用規約', link: '/#' },
    { title: '個人情報の取扱について', link: '/#' },
    { title: '特定商取引に基づく表記', link: '/#' },
    { title: 'お問い合わせ', link: '/#' },
]

export const Footer = () => {
    return (
        <FooterContainer>
            {FooterMenu.map((menu, index) => (
                <Button key={index} sx={{ mx: 2.8, fontSize: '11px', color: COLORS.white }}>
                    {menu.title}
                </Button>
            ))}
        </FooterContainer>
    )
}
