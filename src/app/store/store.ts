import { configureStore } from '@reduxjs/toolkit'

import { testSlice } from './test-slice'

export const store = configureStore({
    reducer: {
        [testSlice.name]: testSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
