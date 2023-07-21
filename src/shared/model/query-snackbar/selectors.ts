import { createSelector } from '@reduxjs/toolkit'

// eslint-disable-next-line boundaries/element-types
import { RootState } from '@app/store'

export const querySnackbarSelector = createSelector(
    (state: RootState) => state['query-snackbar'],
    (state) => state
)
