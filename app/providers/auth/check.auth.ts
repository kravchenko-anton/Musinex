import { useAction } from '@/hook/useAction'
import { useAuth } from '@/hook/useAuth'
import { EnumSecureStore } from '@/types/auth/auth.types'
import { errorToast } from '@/ui/toast/error.toast'
import { errorCatch } from '@/utils/error.catch'
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
					errorToast(errorCatch(e))
					await logout()
				}
			}
		}
		checkToken()
	}, [user])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
			if (!refreshToken && user) {
				logout()
			}
		}

	checkRefreshToken()
	}, [routeName])
}
