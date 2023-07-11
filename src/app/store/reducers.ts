import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from '@feature/theme-switcher'

import { testSlice } from './test-slice'
import { persistedThemeReducer } from './theme-reducer'

export const reducers = combineReducers({
    [testSlice.name]: testSlice.reducer,
    [themeSlice.name]: persistedThemeReducer,
})
