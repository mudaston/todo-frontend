import {
    SnackbarProvider,
    enqueueSnackbar,
    closeSnackbar,
    SnackbarKey,
} from 'notistack'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    querySnackbarSlice,
    querySnackbarSelector,
} from '@shared/model/query-snackbar'

const QuerySnackbar = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()
    const snackbarState = useSelector(querySnackbarSelector)

    useEffect(() => {
        const { message, error } = snackbarState
        const variant = error ? 'error' : 'success'

        for (const text of message) {
            const key: SnackbarKey = enqueueSnackbar(text, {
                variant,
                SnackbarProps: {
                    onClick: () => closeSnackbar(key),
                },
            })
        }
    }, [snackbarState])

    return (
        <SnackbarProvider
            autoHideDuration={5000}
            onClose={() => dispatch(querySnackbarSlice.actions.reset())}
        >
            {children}
        </SnackbarProvider>
    )
}

export default QuerySnackbar
