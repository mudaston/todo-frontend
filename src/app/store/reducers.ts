import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from '@feature/theme-switcher'

import { querySnackbarSlice } from '@shared/model/query-snackbar'

import { todoApi } from '@entities/todo'

import { testSlice } from './test-slice'

export const reducers = combineReducers({
    [testSlice.name]: testSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [querySnackbarSlice.name]: querySnackbarSlice.reducer,
})
