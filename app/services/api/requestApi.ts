import { errorCatch } from '@/services/api/errorApi'
import instance from '@/services/api/interceptorsApi'
import { errorToast } from '@/ui/toast/errorToast'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	const onError = (error: AxiosError<T>) => {
			errorToast(errorCatch(error))

		return Promise.reject(error)
	}

	return instance(config).then(onSuccess).catch(onError)
}
