import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: [],
	reducers: {}
})
export const { reducer: favoriteReducer, actions: FavoriteAction } = favoriteSlice
