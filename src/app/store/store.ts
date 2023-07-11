import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import { reducers } from './reducers'

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
