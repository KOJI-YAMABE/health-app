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
            <Box sx={{ mt: 8, pb: 8 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
