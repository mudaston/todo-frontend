import { configureStore, Reducer } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { themeSlice } from '@feature/theme-switcher'

import { querySnackbarMiddleware } from '@shared/model/query-snackbar'

import { todoApi } from '@entities/todo'

import { reducers } from './reducers'

const makeConfiguredStore = (reducer: Reducer<ReturnType<typeof reducers>>) =>
    configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
            }).concat([thunk, todoApi.middleware, querySnackbarMiddleware]),
    })

export let store: ReturnType<typeof makeConfiguredStore>

const makeStore = () => {
    const isServer = typeof window === 'undefined'

    if (isServer) {
        return makeConfiguredStore(reducers)
    }

    const persistConfig = {
        key: 'persist',
        whitelist: [themeSlice.name],
        storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducers)

    // @ts-expect-error EmptyObject
    store = makeConfiguredStore(persistedReducer)

    // @ts-expect-error nasty fucking hack for fucking nasty redux persistor
    store.__persistor = persistStore(store)

    return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)
