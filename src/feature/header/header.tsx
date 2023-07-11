'use client'
import { AppBar, Typography, Toolbar } from '@mui/material'

import { ThemeSwitcher } from '@feature/theme-switcher'

import { styles } from './styles'

interface HeaderProps {}

type Props = HeaderProps

const Header: React.FC<Props> = () => {
    return (
        <AppBar position='sticky' sx={styles['header']}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Mudastone
                </Typography>
                <ThemeSwitcher />
            </Toolbar>
        </AppBar>
    )
}

export default Header
