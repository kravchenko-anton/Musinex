import { login, logout, register } from '@/redux/auth/authAction'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
		isLoading: false,
		user: null,
	}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		}).addCase(register.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
		}).addCase(register.rejected, (state) => {
				state.isLoading= false
			state.user = null
		}).addCase(login.pending, state => {
			state.isLoading = true
		}).addCase(login.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
		}).addCase(login.rejected, (state) => {
			state.isLoading= false
			state.user = null
		}).addCase(logout.fulfilled, (state) => {
			state.isLoading= false
			state.user = null
		})
	}
})
export const { reducer: authReducer, actions: authAction } =
	authSlice
