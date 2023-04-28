import { createSlice } from '@reduxjs/toolkit'


export const ThemeSlice = createSlice({
		name: 'settings',
		initialState: 'light' as 'light' | 'dark',
		reducers: {
			setTheme: (state, { payload }) => {
				return payload
			}
		}
	}
)
export const { reducer: ThemeReducer, actions: ThemeAction } = ThemeSlice
