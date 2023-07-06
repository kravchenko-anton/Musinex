import { TokensType } from '@/types/auth/auth.types'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync('access_token')
	return accessToken || null
}

export const saveTokensStorage = async (data: TokensType) => {
	await setItemAsync('access_token', data.access_token)
	await setItemAsync('refresh_token', data.refresh_token)
}

export const deleteTokensStorage = async () => {
	await deleteItemAsync('access_token')
	await deleteItemAsync('refresh_token')
}
