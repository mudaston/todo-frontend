'use client'
import { AppBar, Typography, Toolbar } from '@mui/material'

import { styles } from './styles'

interface HeaderProps {}

type Props = HeaderProps

const Header: React.FC<Props> = () => {
    return (
        <AppBar position='sticky' sx={styles['header']}>
            <Toolbar>
                <Typography variant='h6'>Mudastone</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
