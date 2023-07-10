import { TypedUseSelectorHook, useSelector } from 'react-redux'

// eslint-disable-next-line boundaries/element-types
import { RootState } from '@app/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
