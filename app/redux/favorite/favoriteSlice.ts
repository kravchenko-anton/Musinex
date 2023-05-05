import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHeartProps } from '../../types/catalogTypes'


// Why I not create a toggle favorite action ? it not ben work https://stackoverflow.com/questions/71048372/redux-toolkit-filter-not-working-when-wanting-to-display-new-array-at-the-same
export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: {
		songs: [],
		artists: [],
		albums: [],
		playlists: []
	} as {
		songs: any[],
		artists: any[],
		albums: any[],
		playlists: any[]
	},
	reducers: {
		toggleFavorite: (state, { payload }: PayloadAction<IHeartProps>) => {
			switch (payload.type) {
				case 'songs':
					state.songs.some(song => song.id === payload.id) ? state.songs = state.songs.filter(song => song.id !== payload.id) : state.songs.push({ id: payload.id })
					break
				case 'albums':
					state.albums.some(song => song.id === payload.id) ? state.albums = state.albums.filter(song => song.id !== payload.id) : state.albums.push({ id: payload.id })
					break
				case 'playlists':
					state.playlists.some(song => song.id === payload.id) ? state.playlists = state.playlists.filter(song => song.id !== payload.id) : state.playlists.push({ id: payload.id })
					break
				case 'authors':
					state.artists.some(song => song.id === payload.id) ? state.artists = state.artists.filter(song => song.id !== payload.id) : state.artists.push({ id: payload.id })
					break
			}
		}
		
	}
})
export const { reducer: favoriteReducer, actions: FavoriteAction } =
	favoriteSlice
