import { createSlice } from '@reduxjs/toolkit'

import { State } from './types'

const initialState: State = {
    theme: 'dark',
}

export const themeSlice = createSlice({
    name: 'theme-slice',
    initialState,
    reducers: {
        changeTheme: (state) => ({
            theme: state.theme === 'dark' ? 'light' : 'dark',
        }),
    },
})
