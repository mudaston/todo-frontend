import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat',
    fallback: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
    ],
})

export { montserrat }
