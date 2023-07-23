import {
    ThemeProvider as MUIProvider,
    CssBaseline,
    createTheme,
} from '@mui/material'
import { useSelector } from 'react-redux'

import { themeSelector } from '@feature/theme-switcher'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useSelector(themeSelector)

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
