import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    role: 'user' | 'admin'
}

const initialState: InitialState = {
    role: 'user',
}

export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
        setRole: (_, action: PayloadAction<typeof initialState.role>) => {
            return { role: action.payload }
        },
    },
})
