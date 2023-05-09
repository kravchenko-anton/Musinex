import { isRejectedWithValue } from '@reduxjs/toolkit'
import { Middleware, MiddlewareAPI } from 'redux'
import { useTypedNavigation } from '../../hook/useTypedNavigation'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			handleApiError(action.payload.data.message)
		}
		
		return next(action)
	}

export const handleApiError = (errorMessage: string) => {
	const { navigate } = useTypedNavigation()
	navigate('Error', { error: errorMessage })
}