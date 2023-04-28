import { createSlice } from '@reduxjs/toolkit'


export const LanguageSlice = createSlice({
		name: 'settings',
		initialState: 'en' as 'en' | 'ru' | 'ua' | 'pl',
		reducers: {
			setLanguage: (state, { payload }) => {
				return payload
			}
		}
	}
)
export const { reducer: LanguageReducer, actions: LanguageAction } = LanguageSlice
