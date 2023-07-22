import { AppBar, Typography, Toolbar, Button, Stack } from '@mui/material'
import Link from 'next/link'

import { ThemeSwitcher } from '@feature/theme-switcher'

import { styles, LinkStyled } from './styles'

interface HeaderProps {}

type Props = HeaderProps

const Header: React.FC<Props> = () => {
    return (
        <AppBar position='sticky' sx={styles['header']}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Mudastone
                </Typography>
                <Stack gap='20px' flexDirection='row' alignItems='center'>
                    <ThemeSwitcher />
                    <LinkStyled href='/log-in'>
                        <Button
                            variant='contained'
                            size='small'
                            disableElevation
                        >
                            Log in
                        </Button>
                    </LinkStyled>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header
