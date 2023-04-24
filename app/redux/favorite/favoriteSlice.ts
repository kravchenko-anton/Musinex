import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: [],
	reducers: {
		addToFavorite: (state, { payload }) => {
			// @ts-ignore
			if (state.some(r => r.id === payload.id)) state.push(payload as never)
		},
		removeFromFavorite: (state, { payload }) => {
			// @ts-ignore
			state.filter(state => state.id === payload.id)
		}
	}
})
export const { reducer: favoriteReducer, actions } = favoriteSlice
