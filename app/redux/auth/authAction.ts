import { deleteTokensStorage, saveTokensStorage } from '@/redux/auth/authHelper'
import { IAuthFields } from '@/types/auth/authTypes'
import { errorToast } from '@/ui/toast/errorToast'
import { SERVER_URL } from '@/utils/apiConfig'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk<any, IAuthFields>('auth/register',
		async ({ email, password }, thunkAPI) => {
	try {
		const register = await axios.post(SERVER_URL + "/auth/register", {email, password}).then(res => res.data)
			await saveTokensStorage({
				access_token: register.access_token,
				refresh_token: register.refresh_token
			})
		return register
	} catch (e) {
		errorToast(e)
		return thunkAPI.rejectWithValue(e)
	}
		}
	)

export const login = createAsyncThunk<any, IAuthFields>('auth/login',
	async ({email, password}, thunkAPI) => {
		try {
			const login = await axios.post(
				SERVER_URL + "/auth/login", {email, password}
			).then(res => res.data)
			await saveTokensStorage({
				access_token: login.access_token,
				refresh_token: login.refresh_token
			})
		return login
	} catch (e) {
		errorToast(e)
		return thunkAPI.rejectWithValue(e)
	}
	})

export const getNewToken = createAsyncThunk<any, string>('auth/getToken',
	async (refresh_token, thunkAPI) => {
		try {
		const tokens = await axios.post(SERVER_URL +  "/auth/access-token", {refresh_token}).then(res => res.data)
			await saveTokensStorage({
				access_token: tokens.access_token,
				refresh_token: tokens.refresh_token
			})
		return tokens
	} catch (e) {
		errorToast(e)
		return thunkAPI.rejectWithValue(e)
	}
	})

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		await deleteTokensStorage()
	}
	catch (e) {
		errorToast(e)
	}
	return {}
})