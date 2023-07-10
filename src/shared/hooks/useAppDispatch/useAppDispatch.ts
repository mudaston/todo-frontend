import { useDispatch } from 'react-redux'

// eslint-disable-next-line boundaries/element-types
import { AppDispatch } from '@app/store'

export const useAppDispatch: () => AppDispatch = useDispatch
