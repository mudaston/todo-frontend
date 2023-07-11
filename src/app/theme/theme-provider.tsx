'use client'
import {
    ThemeProvider as MUIProvider,
    CssBaseline,
    createTheme,
} from '@mui/material'

import { themeSelector } from '@feature/theme-switcher'

import { useAppSelector } from '@shared/hooks'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppSelector(themeSelector)

    const MUITheme = createTheme({
        palette: {
            mode: theme,
        },
    })

    return (
        <MUIProvider theme={MUITheme}>
            <CssBaseline />
            {children}
        </MUIProvider>
    )
}

export default ThemeProvider
