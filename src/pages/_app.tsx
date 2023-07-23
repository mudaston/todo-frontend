import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import RootLayout from '@layouts/root-layout'

import { QuerySnackbar } from '@shared/ui/query-snackbar'

import { wrapper } from '@app/store'
import { ThemeProvider } from '@app/theme'
import type { AppProps } from 'next/app'

function App({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest)
    const { pageProps } = props

    return (
        <>
            <Provider store={store}>
                {/* @ts-expect-error nasty fucking hack for fucking nasty redux persistor */}
                <PersistGate persistor={store.__persistor}>
                    {() => (
                        <ThemeProvider>
                            <RootLayout>
                                <Head>
                                    <meta
                                        name='viewport'
                                        content='width=device-width, initial-scale=1'
                                    />
                                </Head>
                                <QuerySnackbar>
                                    <Component {...pageProps} />
                                </QuerySnackbar>
                            </RootLayout>
                        </ThemeProvider>
                    )}
                </PersistGate>
            </Provider>
        </>
    )
}

export default App
