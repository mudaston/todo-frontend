import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

// eslint-disable-next-line boundaries/element-types
import { store } from '@app/store'

interface InitialState {
    message: string[]
    error: boolean
}

const initialState: InitialState = {
    message: [],
    error: false,
}

const querySnackbarSlice = createSlice({
    name: 'query-snackbar',
    initialState,
    reducers: {
        setState(_, action: PayloadAction<InitialState>) {
            return action.payload
        },
        reset: () => initialState,
    },
})

export default querySnackbarSlice
