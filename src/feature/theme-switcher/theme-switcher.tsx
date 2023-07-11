'use client'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { IconButton } from '@mui/material'

import { useAppSelector, useAppDispatch } from '@shared/hooks'

import { themeSelector, themeSlice } from './store'

interface ThemeSwitcherProps {}

type Props = ThemeSwitcherProps

const ThemeSwitcher: React.FC<Props> = () => {
    const theme = useAppSelector(themeSelector)
    const dispatch = useAppDispatch()

    // set sunny icon if current mode is dark
    // and set dark mode icon if current theme is light
    const ThemeIcon =
        theme === 'dark' ? (
            <WbSunnyIcon />
        ) : (
            <DarkModeIcon sx={{ color: '#fff' }} />
        )

    const onClickThemeChange = () => {
        dispatch(themeSlice.actions.changeTheme())
    }

    return (
        <IconButton
            disableRipple
            aria-label='switch theme to light'
            onClick={onClickThemeChange}
        >
            {ThemeIcon}
        </IconButton>
    )
}

export default ThemeSwitcher
