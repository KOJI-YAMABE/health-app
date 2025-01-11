import React from 'react'
import { Box } from '@mui/material'
import { Header } from 'components/layouts/Header'
import { Footer } from 'components/layouts/Footer'

type BaseLayoutProps = {
    children: any
}

export const BaseLayout = (props: BaseLayoutProps) => {
    const { children } = props

    return (
        <Box>
            <Header />
            <Box
                sx={{
                    pt: '100px',
                    pb: '60px',
                    paddingLeft: '4rem',
                    paddingRight: '4rem',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>{children}</Box>
            </Box>
            <Footer />
        </Box>
    )
}
