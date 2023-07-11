import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { themeSlice } from '@feature/theme-switcher'

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null)
        },
        setItem(_key: string, value: string) {
            return Promise.resolve(value)
        },
        removeItem() {
            return Promise.resolve()
        },
    }
}

const themePersistConfig = {
    key: 'theme',
    version: 1,
    storage:
        typeof window !== 'undefined'
            ? createWebStorage('local')
            : createNoopStorage(),
}

export const persistedThemeReducer = persistReducer(
    themePersistConfig,
    themeSlice.reducer
)
