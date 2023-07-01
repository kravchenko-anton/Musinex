import { saveTokensStorage } from '@/redux/auth/auth.helper'
import { getAuthUrl, SERVER_URL } from '@/services/api.config'
import { AuthResponseType, EnumSecureStore } from '@/types/auth/auth.types'
import { errorToast } from '@/ui/toast/error.toast'
import { errorCatch } from '@/utils/error.catch'
import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
		const response = await axios
			.post<string, { data: AuthResponseType }>(
				SERVER_URL + getAuthUrl('/access-token'),
				{ refresh_token: refreshToken }
			)
			.then(res => res.data)
		if (response.access_token)
			await saveTokensStorage({
				access_token: response.access_token,
				refresh_token: response.refresh_token
			})

		return response
	} catch (e) {
		errorToast(errorCatch(e))
	}
}
