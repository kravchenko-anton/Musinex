import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: [],
	reducers: {}
})
export const { reducer: favoriteReducer, actions: FavoriteAction } =
	favoriteSlice
