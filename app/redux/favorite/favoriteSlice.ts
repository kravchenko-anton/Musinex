import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritePayload {
	type: 'songs' | 'albums' | 'playlists' | 'authors'
	id: string | number
}

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: {
		songs: [],
		artists: [],
		albums: [],
		playlists: []
	} as {
		songs: { id: number | string } [],
		artists: { id: number | string }[],
		albums: { id: number | string }[],
		playlists: { id: number | string }[]
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
