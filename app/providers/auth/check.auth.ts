import { useAction } from '@/hook/useAction'
import { useAuth } from '@/hook/useAuth'
import { errorToast } from '@/ui/toast/error.toast'
import { errorCatch } from '@/utils/error.catch'
import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'

export const useCheckAuth = (routeName?: string) => {
	const { user } = useAuth()
	const { getNewToken, logout } = useAction()
	useEffect(() => {
		const checkToken = async () => {
			const accessToken = await getItemAsync('access_token')
			const refreshToken = await getItemAsync('refresh_token')
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
			const refreshToken = await getItemAsync('refresh_token')
			if (!refreshToken && user) {
				logout()
			}
		}

		checkRefreshToken()
	}, [routeName])
}
