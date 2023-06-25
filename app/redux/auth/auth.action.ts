import { deleteTokensStorage, saveTokensStorage } from '@/redux/auth/auth.helper'
import { IAuthFields, IAuthResponse } from '@/types/auth/auth.types'
import { errorToast } from '@/ui/toast/error.toast'
import { getAuthUrl, SERVER_URL } from '@/utils/api.config'
import { errorCatch } from '@/utils/error.catch'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk<IAuthResponse, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const register = await axios
				.post(SERVER_URL + getAuthUrl('/register'), { email, password })
				.then(res => res.data)
			console.log(register.access_token, register.refresh_token)
			await saveTokensStorage({
				access_token: register.access_token,
				refresh_token: register.refresh_token
			})
			return register
		} catch (e) {
			errorToast(errorCatch(e))
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const login = await axios
				.post(SERVER_URL + getAuthUrl('/login'), { email, password })
				.then(res => res.data)
			await saveTokensStorage({
				access_token: login.access_token,
				refresh_token: login.refresh_token
			})
			return login
		} catch (e) {
			errorToast(errorCatch(e))
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const getNewToken = createAsyncThunk<IAuthResponse, string>(
	'auth/getToken',
	async (refresh_token, thunkAPI) => {
		try {
			const tokens = await axios
				.post(SERVER_URL + getAuthUrl('/access-token'), { refresh_token })
				.then(res => res.data)
			await saveTokensStorage({
				access_token: tokens.access_token,
				refresh_token: tokens.refresh_token
			})
			return tokens
		} catch (e) {
			errorToast(errorCatch(e))
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		await deleteTokensStorage()
	} catch (e) {
		errorToast(errorCatch(e))
	}
	return {}
})
