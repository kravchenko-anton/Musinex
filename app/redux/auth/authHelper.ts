import { EnumSecureStore, ITokens } from '@/types/auth/authTypes'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokensStorage = async (data: ITokens) => {
	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.access_token)
	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refresh_token)
}

export const deleteTokensStorage = async () => {
	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
}
