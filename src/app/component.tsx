'use client'
import React from 'react'

import { useAppDispatch, useAppSelector } from '@shared/hooks'

import { testSlice } from '@app/store/test-slice'

interface Props {}

const Component: React.FC<Props> = () => {
    const dispatch = useAppDispatch()
    const role = useAppSelector((state) => state.testSlice.role)

    return (
        <button
            onClick={() =>
                dispatch(
                    testSlice.actions.setRole(
                        role === 'admin' ? 'user' : 'admin'
                    )
                )
            }
        >
            {role}
        </button>
    )
}

export default Component
