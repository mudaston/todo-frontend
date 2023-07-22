import { SxProps, styled } from '@mui/material'
import Link from 'next/link'

export const styles: {
    [key: string]: SxProps
} = {
    header: {
        justifyContent: 'center',
        backgroundImage: `linear-gradient(
                            45deg,
                            #9c71f6 0%,
                            #b46bed 51.04%,
                            #466aee 80.73%,
                            #2d8be1 100%
                        )`,
    },
}

export const LinkStyled = styled(Link)`
    text-decoration: none;
`
