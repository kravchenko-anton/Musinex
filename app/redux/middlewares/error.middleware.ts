import { errorToast } from '@/ui/toast/errorToast'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { Middleware, MiddlewareAPI } from 'redux'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			errorToast(action.error)
		}
		
		return next(action)
	}

