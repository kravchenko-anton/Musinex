import { deleteTokensStorage, getAccessToken } from '@/redux/auth/authHelper'
import { errorCatch } from '@/services/api/errorApi'
import { getNewTokens } from '@/services/api/helperAuth'
import { errorToast } from '@/ui/toast/errorToast'
import { SERVER_URL } from '@/utils/apiConfig'
import axios from 'axios'

const instance = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
		await deleteTokensStorage()
				errorToast(errorCatch(error))
			}
		}

		throw error
	}
)
export default instance
