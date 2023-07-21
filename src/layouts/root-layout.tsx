import React from 'react'

import { Header } from '@feature/header'
import { montserrat } from '@layouts/config'

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className={montserrat.className}>
            <Header />
            {children}
        </main>
    )
}

export default RootLayout
