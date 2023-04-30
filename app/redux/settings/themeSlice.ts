import { createSlice } from '@reduxjs/toolkit'

export const ThemeSlice = createSlice({
	name: 'theme',
	initialState: 'dark' as 'light' | 'dark',
	reducers: {
		setTheme: (state, { payload }) => {
			return payload
		}
	}
})
export const { reducer: ThemeReducer, actions: ThemeAction } = ThemeSlice
