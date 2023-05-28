import { saveTokensStorage } from '@/redux/auth/authHelper'
import { EnumSecureStore, IAuthResponse } from '@/types/auth/authTypes'
import { getAuthUrl, SERVER_URL } from '@/utils/apiConfig'
import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

export const getNewTokens = async () => {
		try {
			const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
	
			const response = await axios.post<string, { data: IAuthResponse }>(
				SERVER_URL + getAuthUrl('/login/access-token'),
				{ refreshToken },
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
	
			if (response.data.access_token) await saveTokensStorage(response.data)
	
			return response
		} catch (e) {}
	}
