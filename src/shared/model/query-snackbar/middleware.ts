import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'

// eslint-disable-next-line boundaries/element-types
import { store } from '@app/store'

import { querySnackbarSlice } from './index'

export const querySnackbarMiddleware: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        if (action.payload.data) {
            store.dispatch(
                querySnackbarSlice.actions.setState({
                    message: action.payload.data.message,
                    error: action.payload.data.error,
                })
            )
        }
    }

    return next(action)
}
