import { useSnackbar, SnackbarKey } from 'notistack'

const useSuccessMessage = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const enqueueMessage = (message: string) => {
        const key: SnackbarKey = enqueueSnackbar(message, {
            variant: 'success',
            SnackbarProps: {
                onClick: () => closeSnackbar(key),
            },
        })
    }

    return { enqueueMessage }
}

export default useSuccessMessage
