import { errorToast } from '@/ui/toast/errorToast'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import I18n from 'i18n-js'
import { Middleware, MiddlewareAPI } from 'redux'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			errorToast(action.error, I18n.t('ServerError'))
		}
		
		return next(action)
	}

