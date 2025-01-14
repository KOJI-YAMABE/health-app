
import { Box } from '@mui/material'
import { COLORS } from 'components/constants/color'
import { MenuApp } from 'components/layouts/MenuApp'
import { NavLink } from 'react-router-dom'

export const Header = () => {

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '64px',
                mr: '14px',
                backgroundColor: COLORS.dark500,
                zIndex: '1',
            }}
        >
            <Box sx={{ display: 'flex', position: 'relative', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <NavLink to="/top">
                    <img src="/logo.png" alt="logo" width={144} style={{ marginLeft: '160px' }} />
                </NavLink>
                <MenuApp />
            </Box>
        </Box>
    )
}
