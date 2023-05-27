import { authApi } from '@/redux/api/auth/auth'
import { deleteTokensStorage, saveTokensStorage } from '@/redux/auth/authHelper'
import { IAuthFields } from '@/types/auth/authTypes'
import { errorToast } from '@/ui/toast/errorToast'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const register = createAsyncThunk<any, IAuthFields>('auth/register',
		async ({ email, password }, thunkAPI) => {
	try {
		const { data } = await authApi.useRegisterQuery({email, password})
			await saveTokensStorage(data)
		return data
	} catch (e) {
		errorToast(e)
		return thunkAPI.rejectWithValue(e)
	}
		}
	)

export const login = createAsyncThunk<any, IAuthFields>('auth/login',
	async ({email, password}, thunkAPI) => {
		try {
			const { data } = await authApi.useLoginQuery({email, password})
			await saveTokensStorage(data)
		return data
	} catch (e) {
		errorToast(e)
		return thunkAPI.rejectWithValue(e)
	}
	})

export const getNewToken = createAsyncThunk<any, string>('auth/getToken',
	async (refresh_token, thunkAPI) => {
		try {
		const {data} = await authApi.useGetTokenQuery(refresh_token)
			await saveTokensStorage(data)
		return data
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