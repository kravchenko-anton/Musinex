import { useAction } from '@/hook/useAction'
import { useAuth } from '@/hook/useAuth'
import { getNewToken, logout } from '@/redux/auth/authAction'
import { EnumSecureStore } from '@/types/auth/authTypes'
import { errorCatch } from '@/utils/errorCatch'
import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'

export const useCheckAuth = (routeName?: string) => {
	const { user } = useAuth()
	const { getNewToken, logout } = useAction()
	useEffect(() => {
			const checkToken = async () => {
				const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
				const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
				if (!accessToken && refreshToken) {
					try {
			getNewToken(refreshToken)
					} catch (e) {
						errorCatch(e)
						await logout()
					}
				}
		
			}
			let ignore = checkToken()
		
	}, [])
	
	
	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
			if (!refreshToken && user) {
				logout()
			}
		}
		
		let ignore = checkRefreshToken()
	}, [routeName])
}
