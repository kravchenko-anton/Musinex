import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICatalogRenderTypes } from '../../types/catalogTypes'

interface FavoritePayload {
	type: ICatalogRenderTypes
	id: number | string
}

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
		toggleFavorite: (state, { payload }: PayloadAction<FavoritePayload>) => {
			switch (payload.type) {
				case 'songs':
					state.songs.some(song => song.id === payload.id) && state.songs.filter(song => song.id !== payload.id)
					state.songs.push({ id: payload.id })
					break
				case 'albums':
					state.albums.push({ id: payload.id })
					break
				case 'playlists':
					state.playlists.push({ id: payload.id })
					break
				case 'authors':
					state.artists.push({ id: payload.id })
					break
			}
		}
		
	}
})
export const { reducer: favoriteReducer, actions: FavoriteAction } =
	favoriteSlice
