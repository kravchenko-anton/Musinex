import { useTypedSelector } from '@/hook/useTypedSelector'

export const useAuth = () => useTypedSelector(state => state.auth)