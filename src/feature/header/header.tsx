'use client'
import { AppBar, Typography, Toolbar, Container } from '@mui/material'
import classnames from 'classnames/bind'

import styles from './header.module.scss'

interface HeaderProps {}

type Props = HeaderProps

const cx = classnames.bind(styles)

const Header: React.FC<Props> = () => {
    return (
        <AppBar className={cx('header')} position='sticky'>
            <Toolbar>
                <Typography variant='h6'>Mudastone</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
