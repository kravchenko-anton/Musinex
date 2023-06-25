import instance from '@/services/api/interceptors'
import { errorToast } from '@/ui/toast/error.toast'
import { errorCatch } from '@/utils/error.catch'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	const onError = (error: AxiosError<T>) => {
		errorToast(errorCatch(error))

		return Promise.reject(error)
	}

	return instance(config).then(onSuccess).catch(onError)
}
